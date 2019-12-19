import React, { useState, useEffect } from "react";
import { sortByAttributes } from "./utils/sort";
import LeftMenu from "./LeftMenu";
import MainContent from "./MainContent";

const MovieSearch = props => {
  //   const [selectedFilter, setSelectedFilter] = useState();
  //   const [searchResult, setSearchResult] = useState([]);
  //   const [sortBy, setSortBy] = useState();

  const { selectedFilter, searchResult, sortBy, onFilterChange } = props;

  return (
    <div>
      <LeftMenu onFilterChange={onFilterChange} selectedFilter={selectedFilter} />
      <MainContent searchResult={searchResult} />
    </div>
  );
};

export default MovieSearch;
