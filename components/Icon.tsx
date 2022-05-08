import React from "react";
import MdiIcon from "@mdi/react";
type Props = { icon: string; size?: number; color?: string };

const Icon = (props: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
      <MdiIcon size={props.size} path={props.icon} style={{ margin: "auto" }} color={props.color} />
    </div>
  );
};

export default Icon;
