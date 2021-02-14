import React, { useState } from "react";

import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import "./dropdown.styles.scss";

const Dropdown = ({ defaultElement = 0, label = "", elements }) => {
  const [toggled, setToggled] = useState(false);
  const [selected, setSelected] = useState(defaultElement);

  const handleDropdownClick = () => {
    setToggled(!toggled);
  };

  const handleElementClick = (index) => (event) => {
    setSelected(index);
    setToggled(false);
  };

  return (
    <div className="dropdown">
      <div className="main" onClick={handleDropdownClick}>
        <div className="main-inner">
          <div className="label">{label}</div>
          <div className="result">{elements[selected]}</div>
        </div>
        <div className="dropdown-icon">
          <ChevronDown />
        </div>
      </div>
      <div className={`list ${toggled ? "active" : ""}`}>
        {elements.map((element, idx) => (
          <div className="element" key={idx} onClick={handleElementClick(idx)}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
