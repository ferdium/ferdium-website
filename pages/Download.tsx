import Button from "components/Button";
import Layout from "components/Layout";
import Section from "components/Section";
import React from "react";

type Props = {};

const Download = (props: Props) => {
  return (
    <Layout>
      <Section>
        <h1>Download</h1>
        <a href='https://ferdium.org/download' target='_blank' rel='noreferrer noopener'>
          <Button cta size='large'>
            Download
          </Button>
        </a>
      </Section>
    </Layout>
  );
};

export default Download;
