import Layout from "components/Layout";
import Section from "components/Section";
import type { NextPage } from "next";
import styles from "styles/pages/Home.module.scss";
import Image from "next/image";
import General from "assets/General.png";
import Work from "assets/Workspaces.png";
import Hero from "components/Hero";
import Card from "components/Card";
import CardGrid from "components/CardGrid";
import Button from "components/Button";
import Link from "components/Link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Section row>
        <div className={styles.description}>
          <h2>Services</h2>
          <p>Add your favorite services for quick and easy access</p>
        </div>
        <div className={styles.image}>
          <Image
            src={General}
            alt='The Ferdium app displaying web services as icons on a sidebar to the left.'
          />
        </div>
      </Section>
      <Section row>
        <div className={styles.image}>
          <Image
            src={Work}
            alt='A drawer menu has opened on the left side of the app revealing the option tho choose between workspaces'
          />
        </div>
        <div className={styles.description}>
          <h2>Workspaces</h2>
          <p>Separate services into workspaces to be quickly accessed at any time</p>
        </div>
      </Section>
      <Section>
        <div>
          <h2>...and much more!</h2>
        </div>
        <CardGrid />
      </Section>
      <Section>
        <Link href='/Download'>
          <Button cta size='huge'>
            Get Ferdium
          </Button>
        </Link>
      </Section>
    </Layout>
  );
};

export default Home;
