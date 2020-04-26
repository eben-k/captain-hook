import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import "../App.css";
import reducer from "../reducer";
import {
  initialState,
  MOVIE_API_URL,
  baseURL,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_FAILURE,
} from "../utils/utils";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchTerm) => {
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
    });
    fetch(baseURL(searchTerm))
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse === "True") {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: SEARCH_MOVIES_FAILURE,
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, loading, errorMessage } = state;

  return (
    <div className="App">
      <Header text="MOVIE HOUSE" />
      <Search search={search} />
      <p className="App-intro">Suggested Favourites</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>Loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
