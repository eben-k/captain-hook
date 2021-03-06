export const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export const MOVIE_API_URL = "https://www.omdbapi.com/?s=world&apikey=3f561479";

type JsonResponse = {
  Search: [{
    Title: string,
    Year: string,
    Poster: string,
  }],
  Response: string
}

export const initialState = {
  loading: true,
  movies: [] as unknown as JsonResponse["Search"],
  errorMessage: '' as string,
};

export const baseURL = (searchTerm: string) =>
  `https://www.omdbapi.com/?s=${searchTerm}&apikey=3f561479`;

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
