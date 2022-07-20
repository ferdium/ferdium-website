import { ReactNode } from "react";

import styles from "styles/components/PlatformDownloads.module.scss";
import Button from "./Button";
import ExternalLink from "./ExternalLink";
type Props = {
  downloadTypes: Array<Type>;
  grid?: boolean;
  gridTemplate?: string;
  gridTemplateArray?: Array<string>;
};
type Type = {
  link?: Link;
  title?: string;
  multipleLinks?: Array<Link>;
};
export type Link = {
  name?: string;
  browser_download_url?: string;
};
const PlatformDownloads = (props: Props) => {
  return (
    <article className={styles.section}>
      <div
        className={styles.links + ` ${props.gridTemplate ? styles[props.gridTemplate] : ""}`}
        style={props.grid ? { display: "grid" } : undefined}>
        {props.downloadTypes.map((type, index) => {
          let content: ReactNode;
          if (type.link) {
            content = (
              <div className={styles.link}>
                <ExternalLink href={type.link.browser_download_url ?? ""}>
                  <Button cta2 square>
                    {type.link.name}
                  </Button>
                </ExternalLink>
              </div>
            );
          }

          if (type.multipleLinks) {
            content = type.multipleLinks.map((altLink) => (
              <div className={styles.link} key={altLink.name}>
                <ExternalLink href={altLink.browser_download_url ?? ""}>
                  <Button cta2 square>
                    {altLink.name}
                  </Button>
                </ExternalLink>
              </div>
            ));
          }

          return (
            <section key={type.title} style={{ gridArea: props.gridTemplateArray?.[index] ?? "0" }}>
              <h3>{type.title}</h3>
              <div className={styles.content}>{content}</div>
            </section>
          );
        })}
      </div>
    </article>
  );
};

export default PlatformDownloads;
