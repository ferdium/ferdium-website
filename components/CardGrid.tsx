import React from "react";
import Card from "./Card";

import styles from "styles/components/CardGrid.module.scss";
import {
  mdiChatSleep,
  mdiCheckboxMultipleMarked,
  mdiCloudSync,
  mdiPuzzle,
  mdiShield,
  mdiSunglasses,
} from "@mdi/js";
import Icon from "./Icon";

type Props = {};

const CardGrid = (props: Props) => {
  return (
    <div className={styles.cards}>
      <div className={styles.cardWrapper}>
        <Card icon={<Icon icon={mdiCheckboxMultipleMarked} size={2} color='#7367f0' />}>
          <h3>Todo</h3>
          <p>
            Ferdium has a built in Todo panel that is accessable at eny time and can be viewed in
            tandem with your other services.
          </p>
        </Card>
      </div>
      <div className={styles.cardWrapper}>
        <Card icon={<Icon icon={mdiPuzzle} size={2} color='#7367f0' />}>
          <h3>Custom Services</h3>
          <p>
            Can&apos;t find the service you are looking for in Ferdium? Add your own custom service
            without any extra steps!
          </p>
        </Card>
      </div>
      <div className={styles.cardWrapper}>
        <Card icon={<Icon icon={mdiSunglasses} size={2} color='#7367f0' />}>
          <h3>Anonymous Access</h3>
          <p>
            Ferdium can be used without an account without hassle and all your Ferdium app data
            stays with you.
          </p>
        </Card>
      </div>
      <div className={styles.cardWrapper}>
        <Card icon={<Icon icon={mdiCloudSync} size={2} color='#7367f0' />}>
          <h3>Cloud Sync</h3>
          <p>
            Access your services and workspaces on all your computers with an account through
            Ferdium.
          </p>
        </Card>
      </div>
      <div className={styles.cardWrapper}>
        <Card icon={<Icon icon={mdiChatSleep} size={2} color='#7367f0' />}>
          <h3>Save Resources</h3>
          <p>Ferdium will hibernate services to save resources to prevent computer slow downs.</p>
        </Card>
      </div>
      <div className={styles.cardWrapper}>
        <Card icon={<Icon icon={mdiShield} size={2} color='#7367f0' />}>
          <h3>Privacy</h3>
          <p>
            Prevent notifications from showing information whilst still notifying you when needed.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CardGrid;
