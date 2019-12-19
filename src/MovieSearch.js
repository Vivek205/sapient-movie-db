import React, { useState, useEffect } from "react";
import { sortByAttributes } from "./utils/sort";
import LeftMenu from "./LeftMenu";
import MainContent from "./MainContent";

const MovieSearch = props => {
  //   const [selectedFilter, setSelectedFilter] = useState();
  //   const [searchResult, setSearchResult] = useState([]);
  //   const [sortBy, setSortBy] = useState();

  const { selectedFilter, searchResult,  onFilterChange, updateSearchResult } = props;

  return (
    <div>
      <LeftMenu
        onFilterChange={onFilterChange}
        selectedFilter={selectedFilter}
        searchResult={searchResult}
        updateSearchResult={updateSearchResult}
      />
      <MainContent searchResult={searchResult} />
    </div>
  );
};

export default MovieSearch;
