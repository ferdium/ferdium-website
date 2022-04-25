import Button from "components/Button";
import Layout from "components/Layout";
import Link from "components/Link";
import Section from "components/Section";
import React from "react";

type Props = {};

const Download = (props: Props) => {
  return (
    <Layout>
      <Section>
        <h1>Download</h1>
        <a
          href='https://github.com/ferdium/ferdi/releases'
          target='_blank'
          rel='noopener noreferrer'>
          <Button cta size='large'>
            Download
          </Button>
        </a>
      </Section>
    </Layout>
  );
};

export default Download;
