import Layout from "components/Layout";
import Section from "components/Section";
import type { NextPage } from "next";
import styles from "styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <Section>
        <div id={styles.logo} />
        <h1>Ferdium</h1>
        <h2 id={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a libero ante.
          Suspendisse rutrum vel ipsum vel vulputate. Morbi euismod malesuada libero a ornare.
          Aenean commodo scelerisque congue.{" "}
        </h2>
      </Section>
    </Layout>
  );
};

export default Home;
