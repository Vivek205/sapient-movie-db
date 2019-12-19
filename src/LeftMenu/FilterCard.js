import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Form, Accordion } from "react-bootstrap";

const FilterCard = props => {
  const { title, attributes, onFilterChange } = props;

  return (
    <div style={{ border: "1px solid black" }}>
      <h4>{title}</h4>
      <hr />
      {attributes.map(attr => (
        <form>
          <input id={attr} type="checkbox" checked onChange={e => onFilterChange(e, title, attr)} />
          <label htmlFor={attr}>{attr}</label>
        </form>
      ))}
    </div>
  );
};

export default FilterCard;
