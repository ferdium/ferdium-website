import React, { useEffect, useState } from "react";
import CodeBlockSection from "components/CodeBlockSection";
import Head from "components/Head";
import Layout from "components/Layout";
import Section from "components/Section";

import styles from "styles/pages/Download.module.scss";
import PlatformDownloads from "components/PlatformDownloads";

import linuxLogo from "assets/Tux_Mono.svg";
import Tabs, { Option } from "components/Tabs";

type Props = {};

type releaseObject = {
  browser_download_url: string;
  name: string;
};

const Download = (props: Props) => {
  const [latestReleases, setLatestReleases] = useState<Array<releaseObject>>([]);
  const [currentTab, setCurrentTab] = useState<Option>();

  useEffect(() => {
    getLatestRelease();
  }, []);

  const getLatestRelease = async () => {
    const response = await (
      await fetch("https://api.github.com/repos/ferdium/ferdium-app/releases?per_page=1")
    ).json();
    const filteredResponse = response[0].assets
      .map((asset: any) => {
        const castAsset = asset as releaseObject;
        console.log(response);
        castAsset.name = castAsset.name
          .replace(/Ferdium-(linux|mac|win)-/gm, "")
          .replace(response[0].name, "")
          .replace(/[-]/g, " ")
          .replace(/[.]/g, " ")
          .replace("  ", " ")
          .trim();
        return castAsset;
      })
      .filter(
        (asset: releaseObject) => !asset.name.includes("yml") && !asset.name.includes("blockmap")
      );

    setLatestReleases(filteredResponse);
  };
  let links;
  console.log(currentTab);
  switch (currentTab?.key) {
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
  console.log(currentTab);
  return (
    <Layout>
      <Head title='Ferdium | Download' />
      <Section>
        <h1>Download</h1>
        <Tabs
          options={[
            { title: "Linux", key: "linux" },
            { title: "Windows", key: "win" },
            { title: "Mac", key: "mac" },
          ]}
          onClick={(option: Option) => setCurrentTab(option)}
        />
        {latestReleases && latestReleases.length > 0 && links}
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
