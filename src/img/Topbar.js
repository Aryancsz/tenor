import React from "react";
import logo from "./topBar.png";
const Topbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ padding: "1px 19vh", backgroundColor: "white" }}
      />
    </div>
  );
};

export default Topbar;
