import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import MovieCard from "./MovieCard";

const SearchResult = props => {
  const { searchResult } = props;
  return (
    <Fragment>
      {searchResult.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </Fragment>
  );
};

export default SearchResult;
