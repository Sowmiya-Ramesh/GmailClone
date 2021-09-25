import React from "react";
import "./sidebarOption.css";
function SideBarOptions({ Icon, title, number, selected }) {
  return (
    <div className={`sidebar_options ${selected && "sidebar_options--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}
export default SideBarOptions;
