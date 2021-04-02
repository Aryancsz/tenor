import React from "react";
import Search from "./components/Search";
import Topbar from "../src/img/Topbar";

export default () => {
  return (
    <div>
      <div className="grid-demo" id="top">
        <Topbar />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};
