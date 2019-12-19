import React, { Component } from "react";
import "./App.css";
import MovieSearch from "./MovieSearch";
import { sortByAttributes } from "./utils/sort";

class App extends Component {
  state = {
    selectedFilter: { species: [], gender: [], origin: [] },
    searchResult: [],
    sortBy: sortByAttributes.ASC
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const responseJson = await response.json();
    this.setState({ searchResult: responseJson.results });
  };

  onFilterChange = (e, title, attr) => {
    const { checked } = e.target;
  };

  render() {
    const { selectedFilter, searchResult, sortBy } = this.state;
    return (
      <div className="App">
        <MovieSearch
          selectedFilter={selectedFilter}
          searchResult={searchResult}
          sortBy={sortBy}
          onFilterChange={this.onFilterChange}
        />
      </div>
    );
  }
}

export default App;
