import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import { mdiDiscord, mdiReddit } from "@mdi/js";
import styles from "styles/components/CommunityLinks.module.scss";
import ExternalLink from "./ExternalLink";

type Props = {};

const CommunityLinks = (props: Props) => {
  return (
    <div className={styles.links}>
      <ExternalLink href='https://discord.gg/jVv4Qns8pP' neutral>
        <Button asDiv prefix={<Icon icon={mdiDiscord} size={1} />}>
          Discord
        </Button>
      </ExternalLink>
      <ExternalLink href='https://www.reddit.com/r/ferdium' neutral>
        <Button asDiv prefix={<Icon icon={mdiReddit} size={1} />}>
          Reddit
        </Button>
      </ExternalLink>
    </div>
  );
};

export default CommunityLinks;
