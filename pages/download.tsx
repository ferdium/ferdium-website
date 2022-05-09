import Button from "components/Button";
import CodeBlockSection from "components/CodeBlockSection";
import ExternalLink from "components/ExternalLink";
import Head from "components/Head";
import Layout from "components/Layout";
import Section from "components/Section";
import React from "react";
import { CopyBlock, dracula, nord } from "react-code-blocks";

import styles from "styles/pages/Download.module.scss";

type Props = {};

const Download = (props: Props) => {
  return (
    <Layout>
      <Head title='Ferdium | Download' />
      <Section>
        <h1>Download</h1>
        <p className={styles.copy}>
          We&apos;re in the process of getting direct downloads ready, for now you can follow the
          link below to download the latest version of Ferdium from our GitHub Releases. <br />
          <br />
          Once there click &quot;Assets&quot; and choose the version for your platform!
        </p>
        <ExternalLink href='https://github.com/ferdium/ferdium-app/releases/latest'>
          <Button cta size='huge'>
            Download
          </Button>
        </ExternalLink>
      </Section>
      <Section>
        <h2>CLI installations</h2>
        <CodeBlockSection title='Snap' text='snap install --edge ferdium' />
        <CodeBlockSection title='AUR' text='yay -S ferdium' />
      </Section>
    </Layout>
  );
};

export default Download;
