import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE } from "./utils/utils";

type AppState = { movies: [], loading: boolean, errorMessage: string };
type Action = | { type: "SEARCH_MOVIES_SUCCESS", payload: [] } | { type: "SEARCH_MOVIES_FAILURE", error: string } | { type: "SEARCH_MOVIES_REQUEST"}

export function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };

    default:
      return state;
  }
};
