import React from "react";

import { ReactComponent as Icon } from "../../assets/icons/user.svg";
import "./icon.styles.scss";

const UserIcon = ({ hasNotifications = false, children, ...otherProps }) => (
  <div className={`icon ${hasNotifications ? "with-notifications" : ""}`}>
    {hasNotifications ? <div className="dot"></div> : ""}
    {children}
  </div>
);

export default UserIcon;
