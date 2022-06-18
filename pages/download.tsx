import Button from "components/Button";
import CodeBlockSection from "components/CodeBlockSection";
import ExternalLink from "components/ExternalLink";
import Head from "components/Head";
import Layout from "components/Layout";
import Section from "components/Section";
import React from "react";

import styles from "styles/pages/Download.module.scss";

type Props = {};

const Download = (props: Props) => {
  return (
    <Layout>
      <Head title='Ferdium | Download' />
      <Section>
        <h1>Download</h1>
        <div className={styles.copy}>
          <p>
            We&apos;re in the process of getting direct downloads ready, for now you can follow the
            link below to download the latest nightly release of Ferdium from our GitHub Releases.{" "}
          </p>

          <p>
            Once there click &quot;Assets&quot; and choose the version for your platform! We
            currently have releases for macOS, Windows, Linux (AppImage and DEB) and FreeBSD.
          </p>
        </div>
        <ExternalLink href='https://github.com/ferdium/ferdium-app/releases/latest'>
          <Button cta size='huge'>
            Download from GitHub
          </Button>
        </ExternalLink>
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
        <CodeBlockSection
          title='Homebrew (macOS)'
          text={`brew tap ferdium/ferdium\nbrew install ferdium-nightly`}
        />
        <CodeBlockSection
          title='Scoop (Windows)'
          text={`scoop bucket add versions\nscoop install ferdium-nightly`}
        />
        <CodeBlockSection
          title='Snap (Ubuntu linux and derivatives)'
          text={`snap install --edge ferdium\nsnap connect ferdium:camera\nsnap connect ferdium:audio-record`}
        />
      </Section>
    </Layout>
  );
};

export default Download;
