import React from "react";
import { filtersList } from "./content";
import FilterCard from "./FilterCard";

const LeftMenu = props => {
  const { onFilterChange } = props;
  return (
    <div style={{ width: "30vw" }}>
      {Object.entries(filtersList).map(([key, value]) => (
        <FilterCard title={key.toUpperCase()} attributes={value} onFilterChange={onFilterChange} />
      ))}
    </div>
  );
};

export default LeftMenu;
