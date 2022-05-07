import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import { mdiDiscord, mdiGithub, mdiReddit, mdiTwitter } from "@mdi/js";
import styles from "styles/components/CommunityLinks.module.scss";
import ExternalLink from "./ExternalLink";

type Props = { services: Array<string>; icons?: boolean };
const services = [
  {
    key: "github",
    name: "GitHub",
    link: "https://github.com/ferdium/ferdium-app",
    icon: mdiGithub,
  },
  { key: "discord", name: "Discord", link: "https://discord.gg/jVv4Qns8pP", icon: mdiDiscord },
  { key: "reddit", name: "Reddit", link: "https://www.reddit.com/r/ferdium", icon: mdiReddit },
  { key: "twitter", name: "Twitter", link: "https://twitter.com/ferdiumteam", icon: mdiTwitter },
];
const CommunityLinks = (props: Props) => {
  if (props.icons) {
    return (
      <div className={styles.links}>
        <>
          {props.services.map((key: string) => {
            const service = services.find((service_) => service_.key === key);
            if (!service) return <></>;
            return (
              <ExternalLink
                href={service.link}
                aria-label={`${service.name} link`}
                neutral
                key={key}>
                <Icon size={1} icon={service.icon} />
              </ExternalLink>
            );
          })}
        </>
      </div>
    );
  }
  return (
    <div className={styles.links}>
      <>
        {props.services.map((key: string) => {
          const service = services.find((service_) => service_.key === key);
          if (!service) return <></>;
          return (
            <ExternalLink href={service.link} neutral key={key}>
              <Button asDiv prefix={<Icon icon={service.icon} size={1} />}>
                {service.name}
              </Button>
            </ExternalLink>
          );
        })}
      </>
    </div>
  );
};

export default CommunityLinks;
