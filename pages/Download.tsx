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
        <Button cta size='large'>
          Download
        </Button>
      </Section>
    </Layout>
  );
};

export default Download;
