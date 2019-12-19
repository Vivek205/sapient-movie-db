import React from "react";
import { filtersList } from "./content";
import FilterCard from "./FilterCard";
import SortById from "./SortById";

const LeftMenu = props => {
  const { onFilterChange, selectedFilter, updateSearchResult, searchResult } = props;
  return (
    <div style={{ width: "30vw" }}>
      <SortById updateSearchResult={updateSearchResult} searchResult={searchResult} />
      {Object.entries(filtersList).map(([key, value]) => (
        <FilterCard title={key} attributes={value} onFilterChange={onFilterChange} selectedFilter={selectedFilter} />
      ))}
    </div>
  );
};

export default LeftMenu;
