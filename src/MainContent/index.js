import React from "react";
import Sort from "./Sort";
import SearchResult from "./SearchResult";

const MainContent = props => {
  const { searchResult } = props;

  return (
    <div style={{ width: "60vh" }}>
      <Sort />
      <SearchResult searchResult={searchResult} />
    </div>
  );
};

export default MainContent;
