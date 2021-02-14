import React from "react";

import Input from "../input/input.component";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import "./search.styles.scss";

const Search = ({ ...props }) => (
  <div className="search">
    <div className="icon">
      <SearchIcon />
    </div>
    <Input {...props}></Input>
  </div>
);

export default Search;
