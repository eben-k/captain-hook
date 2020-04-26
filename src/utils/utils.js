export const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

export const initialState = {
  loaing: true,
  movies: [],
  errorMessage: null,
};

export const baseURL = (searchTerm) =>
  `https://www.omdbapi.com/?s=${searchTerm}&apikey=4a3b711b`;

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
