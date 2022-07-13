import React, { ReactEventHandler, useState } from "react";
import styles from "styles/components/Tabs.module.scss";

type Props = {
  currentOption?: Option;
  options: Array<Option>;
  onClick?: Function;
};
export type Option = {
  title: string;
  key: string;
};
const Tabs = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState<Option>();
  const control = props.currentOption ?? selectedOption;
  return (
    <div className={styles.tabs}>
      {props.options.map((tab: Option) => (
        <Tab
          option={tab}
          key={tab.key}
          selected={tab.key === control?.key}
          onClick={() => {
            setSelectedOption(tab);
            if (props.onClick) props.onClick(tab);
          }}
        />
      ))}
    </div>
  );
};
type TabProps = {
  selected: boolean;
  option: Option;
  onClick: Function;
};
const Tab = (props: TabProps) => {
  return (
    <button
      className={styles.tab + ` ${props.selected ? styles.selected : ""}`}
      onClick={() => props.onClick()}>
      {props.option.title}
    </button>
  );
};

export default Tabs;
