import { UPDATE_BOOKS_STARTED, UPDATE_BOOKS_SUCCESS, UPDATE_BOOKS_FAILED } from "./actionTypes";

const initialState = {
  books: [],
  total: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOOKS_STARTED: {
      return {
        ...state,
        isLoading: true,
        total: null
      }
    }
    case UPDATE_BOOKS_SUCCESS: {
      const { books, total } = action.payload;
      return {
        ...state,
        isLoading: false,
        books,
        total
      };
    }
    case UPDATE_BOOKS_FAILED: {
      return {
        ...state,
        isLoading: false,
        books: [],
        total: null
      };
    }
    default:
      return state;
  }
}
