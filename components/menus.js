import React from "react";

const Menus = () => {
  return (
    <div className="header-menu">
      <div className="header-inner-menu">
        <ul className="p-0 d-flex align-items-center m-0 justify-content-between">
          <li>
            <a className="active">Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menus;
