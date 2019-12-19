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

  componentDidMount = async () => {
    const searchResult = await this.fetchMovies();
    this.setState({ searchResult });
  };

  fetchMovies = async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson.results;
  };

  onFilterChange = async (title, attr) => {
    const selectedFilter = JSON.parse(JSON.stringify(this.state.selectedFilter));
    if (selectedFilter[title].includes(attr)) {
      const index = selectedFilter[title].findIndex(el => el === attr);
      selectedFilter[title].splice(index, 1);
    } else {
      selectedFilter[title].push(attr);
    }
    const searchResult = await this.fetchMovies();
    const someFilterSelcted = Object.values(selectedFilter).some(value => value.length > 0);

    if (!someFilterSelcted) {
      return this.setState({ selectedFilter, searchResult });
    }

    const filteredResult = searchResult.filter(item => {
      const hasSelectedSpecies = selectedFilter.species.includes(item.species);
      const hasSelectedGender = selectedFilter.gender.includes(item.gender);
      const hasSelectedOrigin = selectedFilter.origin.includes(item.origin.name);

      const includeElement = hasSelectedSpecies || hasSelectedGender || hasSelectedOrigin;

      return includeElement;
    });
    this.setState({ selectedFilter, searchResult: filteredResult });
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
