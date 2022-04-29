import Button from "components/Button";
import Layout from "components/Layout";
import Section from "components/Section";
import React from "react";

import styles from "styles/pages/Download.module.scss";

type Props = {};

const Download = (props: Props) => {
  return (
    <Layout>
      <Section>
        <h1>Download</h1>
        <p className={styles.copy}>
          We&apos;re in the process of getting direct downloads ready, for now you can follow the
          link below to download the latest version of Ferdium from our GitHub Releases. <br />
          <br />
          Once there click &quot;Assets&quot; and choose the version for your platform!
        </p>
        <a
          href='https://github.com/ferdium/ferdium-app/releases'
          target='_blank'
          rel='noreferrer noopener'>
          <Button cta size='huge'>
            Download
          </Button>
        </a>
      </Section>
    </Layout>
  );
};

export default Download;
