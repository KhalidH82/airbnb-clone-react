import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { Button } from "@material-ui/core";
function Banner() {
  const [showSearch, setshowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setshowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outline"
        >
          {showSearch ? "Hide" : "Seach Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button varient="outline">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
