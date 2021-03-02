import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo/logo.component";
import Icon from "../icon/icon.component";

import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/cog.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo />
    </Link>
    <div className="nav">
      <Icon>
        <UserIcon />
      </Icon>
      <Icon>
        <SettingsIcon />
      </Icon>
    </div>
  </div>
);

export default Header;
