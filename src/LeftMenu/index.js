import React from "react";
import { filtersList } from "./content";
import FilterCard from "./FilterCard";

const LeftMenu = props => {
  const { onFilterChange, selectedFilter } = props;
  return (
    <div style={{ width: "30vw" }}>
      {Object.entries(filtersList).map(([key, value]) => (
        <FilterCard
          title={key}
          attributes={value}
          onFilterChange={onFilterChange}
          selectedFilter={selectedFilter}
        />
      ))}
    </div>
  );
};

export default LeftMenu;
