import React, { useEffect, useState } from "react";
import CodeBlockSection from "components/CodeBlockSection";
import Head from "components/Head";
import Layout from "components/Layout";
import Section from "components/Section";

import styles from "styles/pages/Download.module.scss";
import PlatformDownloads from "components/PlatformDownloads";

import linuxLogo from "assets/Tux_Mono.svg";
import Tabs from "components/Tabs";
import ExternalLink from "components/ExternalLink";
import Button from "components/Button";
import Loader from "components/Loader";

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

  useEffect(() => {
    getLatestRelease();
  }, []);

  const getLatestBetaRelease = async (page: number = 1): Promise<any> => {
    const cache = JSON.parse(localStorage.getItem("cachedRelease") ?? "{}");
    if (cache.cacheExpires && parseInt(cache.cacheExpires) > new Date().getTime()) {
      return cache.release;
    }
    const response = await (
      await fetch(`https://api.github.com/repos/ferdium/ferdium-app/releases?per_page=${page}`)
    ).json();
    const release = response.find((release: any) => release.name.includes("beta"));
    if (!release) {
      return await getLatestBetaRelease(page + 1);
    }
    localStorage.setItem(
      "cachedRelease",
      JSON.stringify({
        cacheExpires: new Date().getTime() + 10 * 60000,
        release,
      })
    );
    return release;
  };
  const getLatestRelease = async () => {
    if (isGettingRelease) return;
    setIsGettingRelease(true);
    const release = await getLatestBetaRelease();
    /*  

   This can be used if we split betas and nightlies into a new repo. 

   const response = await (
      await fetch("https://api.github.com/repos/ferdium/ferdium-app/releases?per_page=1")
    ).json();
    const release = response[0]; 
    */

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

    // this is a bit of a mess
    const userOS = navigator.userAgent.split("(")[1].split(")")[0].toLowerCase();
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
        {!latestReleases || latestReleases.length <= 0 || isGettingRelease ? <Loader /> : links}
      </Section>
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
        <CodeBlockSection title='Flatpack' text={`flatpak install flathub org.ferdium.Ferdium`} />
        <CodeBlockSection
          title='Homebrew (macOS)'
          text={`brew tap ferdium/ferdium\nbrew install ferdium-nightly`}
        />
        <CodeBlockSection
          title='Scoop (Windows)'
          text={`scoop bucket add versions\nscoop install ferdium-nightly`}
        />
        <CodeBlockSection title='Chocolatey (Windows)' text={`choco install ferdium --pre`} />
        <CodeBlockSection title='Winget (Windows)' text={`winget install ferdium`} />
        <CodeBlockSection
          title='Snap (Ubuntu linux and derivatives)'
          text={`snap install --edge ferdium\nsnap connect ferdium:camera\nsnap connect ferdium:audio-record`}
        />
      </Section>
    </Layout>
  );
};

export default Download;
