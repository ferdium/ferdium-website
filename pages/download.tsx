import { useEffect, useState } from "react";
import CodeBlockSection from "components/CodeBlockSection";
import Head from "components/Head";
import Layout from "components/Layout";
import Section from "components/Section";

import styles from "styles/pages/Download.module.scss";
import PlatformDownloads from "components/PlatformDownloads";

import Tabs from "components/Tabs";
import ExternalLink from "components/ExternalLink";
import Button from "components/Button";
import Loader from "components/Loader";
import Link from "next/link";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();
type Props = {};

type releaseObject = {
  browser_download_url: string;
  name: string;
};

const Download = (props: Props) => {
  const [latestReleases, setLatestReleases] = useState<Array<releaseObject>>([]);
  const [currentTab, setCurrentTab] = useState<string>();
  const [primaryDownloadUrl, setPrimaryDownloadUrl] = useState<releaseObject>();
  const [isGettingRelease, setIsGettingRelease] = useState(false);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    getLatestRelease();
  }, []);

  // TODO: Make general function to fetch for either stable, beta or nightly
  const getLatestStableRelease = async (page: number = 1): Promise<any> => {
    const cache = JSON.parse(localStorage.getItem("cachedRelease") ?? "{}");

    // If we have a cached release and it hasn't expired, use it.
    if (cache.cacheExpires && parseInt(cache.cacheExpires) > new Date().getTime()) {
      return cache.release;
    }

    let response;

    try {
      response = await octokit.rest.repos.listReleases({
        owner: "ferdium",
        repo: "ferdium-app",
        page: page,
      });
    } catch (e: any) {
      setFallback(true);
      return;
    }

    const release = response.data.find(
      (release) => release && !release.draft && !release.prerelease
    );

    if (!release) {
      return await getLatestStableRelease(page + 1);
    }

    // Cache the latest result to prevent getting rate-limited by the GitHub API
    localStorage.setItem(
      "cachedRelease",
      JSON.stringify({
        // Cache is valid for 10 min
        cacheExpires: new Date().getTime() + 10 * 60000,
        release,
      })
    );

    return release;
  };
  const getLatestRelease = async () => {
    if (isGettingRelease) return;
    setIsGettingRelease(true);
    const release = await getLatestStableRelease();

    if (!release) {
      setFallback(true);
      setIsGettingRelease(false);
      return;
    }

    const filteredResponse = release.assets
      .map((asset: any) => {
        const castAsset = asset as releaseObject;
        // could probably be reduced to fewer calls.
        castAsset.name = castAsset.name
          .replace(/Ferdium-(linux|mac|win)-/gm, "")
          .replace(release.name, "")
          .replace(/[-]/g, " ")
          .replace(/[.]/g, " ")
          .replace("  ", " ")
          .trim();

        return castAsset;
      })
      .filter(
        (asset: releaseObject) => !asset.name.includes("yml") && !asset.name.includes("blockmap")
      );

    const userOS = navigator.userAgent.match(/Mac|Win|Linux/g)?.[0].toLowerCase() || "win";
    switch (true) {
      case userOS.includes("linux"):
        setCurrentTab("linux");
        setPrimaryDownloadUrl(
          filteredResponse.find((asset: releaseObject) => asset.name.includes("AppImage"))
        );
        break;
      case userOS.includes("mac"):
        setCurrentTab("mac");
        setPrimaryDownloadUrl(
          filteredResponse.find(
            (asset: releaseObject) => asset.name.includes("dmg") && asset.name.includes("x64")
          )
        );
        break;
      case userOS.includes("win"):
        setCurrentTab("win");
        setPrimaryDownloadUrl(
          filteredResponse.find(
            (asset: releaseObject) =>
              asset.name.includes("exe") &&
              !asset.name.includes("x64") &&
              !asset.name.includes("ia32") &&
              !asset.name.includes("arm64")
          )
        );
        break;
    }

    setLatestReleases(filteredResponse);
    setIsGettingRelease(false);
  };

  let links;
  switch (currentTab) {
    case "linux":
      links = (
        <PlatformDownloads
          grid
          gridTemplate='linux'
          gridTemplateArray={["deb", "rpm", "appimage", "freebsd", "tar"]}
          downloadTypes={[
            {
              title: "DEB",
              multipleLinks: latestReleases.filter((asset: releaseObject) =>
                asset.name.includes("deb")
              ),
            },
            {
              title: "RPM",
              link: {
                ...latestReleases.find((asset: releaseObject) => asset.name.includes("rpm")),
              },
            },
            {
              title: "AppImage",
              link: {
                ...latestReleases.find((asset: releaseObject) => asset.name.includes("AppImage")),
              },
            },
            {
              title: "FreeBSD",
              link: {
                ...latestReleases.find((asset: releaseObject) => asset.name.includes("freebsd")),
              },
            },
            {
              title: "Tar",
              link: {
                ...latestReleases.find((asset: releaseObject) => asset.name.includes("tar")),
              },
            },
          ]}
        />
      );
      break;
    case "win":
      links = (
        <PlatformDownloads
          downloadTypes={[
            {
              title: "Installer",
              multipleLinks: latestReleases
                .filter(
                  (asset: releaseObject) =>
                    asset.name.includes("exe") && !asset.name.includes("Portable")
                )
                .reverse(),
            },
            {
              title: "Portable Installer",
              multipleLinks: latestReleases
                .filter(
                  (asset: releaseObject) =>
                    asset.name.includes("exe") && asset.name.includes("Portable")
                )
                .reverse(),
            },
          ]}
        />
      );
      break;
    case "mac":
      links = (
        <PlatformDownloads
          downloadTypes={[
            {
              title: "Installer",
              multipleLinks: latestReleases.filter((asset: releaseObject) =>
                asset.name.includes("dmg")
              ),
            },
            {
              title: "Bundle",
              multipleLinks: latestReleases.filter((asset: releaseObject) =>
                asset.name.includes("bundle")
              ),
            },
          ]}
        />
      );
      break;
    default:
      links = <></>;
      break;
  }
  return (
    <Layout>
      <Head title='Ferdium | Download' />
      {fallback && (
        <Section>
          <h1>Download</h1>
          <div className={styles.copy}>
            <p>
              Something went wrong when getting the links to the latest Ferdium release. Try again
              later or follow the link below to download the latest nightly release of Ferdium from
              our GitHub Releases.{" "}
            </p>

            <p>
              Once there click &quot;Assets&quot; and choose the version for your platform (check
              the
              <Link href='/faq'> FAQ </Link> if you are unsure which one to get)! We currently have
              releases for macOS, Windows, Linux (AppImage and DEB) and FreeBSD.
            </p>
          </div>
          <ExternalLink href='https://github.com/ferdium/ferdium-app/releases/latest'>
            <Button cta size='huge'>
              Download from GitHub
            </Button>
          </ExternalLink>
        </Section>
      )}

      {!fallback && (
        <>
          <Section>
            <h1>Download</h1>
            <p className={styles.copy}>Find the installer for your OS below to install Ferdium!</p>
            {!primaryDownloadUrl || isGettingRelease ? (
              <Loader />
            ) : (
              <ExternalLink href={primaryDownloadUrl?.browser_download_url}>
                <Button cta size='huge'>
                  Download
                </Button>
              </ExternalLink>
            )}
            <p style={{ fontSize: "0.5rem" }}>{primaryDownloadUrl?.name}</p>
          </Section>
          {latestReleases && latestReleases.length > 0 && !isGettingRelease && (
            <Section>
              <h2>Alternative Downloads</h2>
              <Tabs
                options={[
                  { title: "Linux", key: "linux" },
                  { title: "Windows", key: "win" },
                  { title: "Mac", key: "mac" },
                ]}
                onClick={(key: string) => setCurrentTab(key)}
                value={currentTab}
              />
              {links}
            </Section>
          )}
        </>
      )}
      <Section>
        <h2>Using your OS&apos;s package manager</h2>
        <p className={styles.copy}>
          Alternatively, you can use the package manager of your OS to install Ferdium. Use one of
          the CLI commands below depending on your OS to install the latest binary release of
          Ferdium. Some package managers (like AUR) also allow you to build the source release
          yourself.
        </p>
        <CodeBlockSection
          title='AUR (Arch Linux and derivatives)'
          text={`yay -S ferdium-bin\n// or, to compile yourself\nyay -S ferdium`}
        />
        <CodeBlockSection title='Flatpak' text={`flatpak install flathub org.ferdium.Ferdium`} />
        {
          // TODO: Update Flatpak with beta version when available
        }
        <CodeBlockSection
          title='Homebrew (macOS)'
          text={`brew tap ferdium/ferdium\n# to install the last stable release:\nbrew install ferdium\n# or for Beta pre-releases:\nbrew install ferdium-beta\n# or for nightly pre-releases:\nbrew install ferdium-nightly`}
        />
        <CodeBlockSection
          title='Scoop (Windows)'
          text={`scoop bucket add versions\n# to install the last nightly pre-releases:\nscoop install ferdium-nightly`}
        />
        { 
          // TODO: Update scoop installer to include stable version when bucket will be ready
        } 
        <CodeBlockSection
            title='Chocolatey (Windows)'
            text={`# to install the last stable release:\nchoco install ferdium \n# or for beta pre-releases (when available):\nchoco install ferdium --pre`}
        />
        <CodeBlockSection
            title='Winget (Windows)'
            text={`# to install the last stable release:\nwinget install ferdium\n# or for Beta pre-releases:\nwinget install ferdium-beta\n# or for nightly pre-releases:\nwinget install ferdium-nightly`}
        />
        <CodeBlockSection
          title='Snap (Ubuntu linux and derivatives)'
          text={`snap install ferdium\nsnap connect ferdium:camera\nsnap connect ferdium:audio-record`}
        />
      </Section>
    </Layout>
  );
};

export default Download;
