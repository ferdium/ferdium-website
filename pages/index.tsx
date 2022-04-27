import Layout from "components/Layout";
import Section from "components/Section";
import type { NextPage } from "next";
import styles from "styles/pages/Home.module.scss";
import logo from "assets/logo.png";
import Image from "next/image";
import Background from "components/Background";

const Home: NextPage = () => {
  return (
    <Layout>
      <div id={styles.backgroundWrapper}>
        <Background />
      </div>
      <Section>
        <div>
          <Image id={styles.logo} src={logo} alt='' width={320} height={320} />
        </div>
        <h1>Ferdium</h1>
        <h2 id={styles.subtitle}>Collect all your services in one place.</h2>
      </Section>
    </Layout>
  );
};

export default Home;
