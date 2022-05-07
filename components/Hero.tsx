import Image from "next/image";
import React from "react";
import Background from "./Background";
import Section from "./Section";
import logo from "assets/logo.png";
import styles from "styles/components/Hero.module.scss";
import Button from "./Button";
import Icon from "./Icon";
import { mdiDiscord, mdiReddit } from "@mdi/js";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div id={styles.backgroundWrapper}>
        <Background />
      </div>
      <Section className={styles.hero} noBg>
        <div>
          <Image id={styles.logo} src={logo} alt='' width={256} height={256} />
        </div>
        <h1>Ferdium</h1>
        <h2 id={styles.subtitle}>
          The home for all your services
          <br /> built by the community
        </h2>
        <div className={styles.links}>
          <a href='https://discord.gg/jVv4Qns8pP' target='_blank' rel='noreferrer noopener'>
            <Button prefix={<Icon icon={mdiDiscord} size={1} />}>Discord</Button>
          </a>
          <a href='https://www.reddit.com/r/ferdium' target='_blank' rel='noreferrer noopener'>
            <Button prefix={<Icon icon={mdiReddit} size={1} />}>Reddit</Button>
          </a>
        </div>
      </Section>
    </>
  );
};

export default Hero;
