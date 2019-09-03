import { UPDATE_BOOKS_STARTED, UPDATE_BOOKS_SUCCESS, UPDATE_BOOKS_FAILED, UPDATE_BOOKS_CANCELED } from "./actionTypes";

const initialState = {
  books: [],
  total: 0,
  isLoading: false,
  lastPageFetched: 0,
  query: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOOKS_STARTED: {
      const { query, page } = action.payload;
      return {
        ...state,
        isLoading: true,
        query,
        lastPageFetched: page
      }
    }
    case UPDATE_BOOKS_SUCCESS: {
      const { books, total } = action.payload;

      if (state.lastPageFetched === 1) {
        return {
          ...state,
          isLoading: false,
          books,
          total
        };
      } else {
        return {
          ...state,
          isLoading: false,
          books: [...state.books, ...books],
          total
        }
      }
    }
    case UPDATE_BOOKS_FAILED: {
      return {
        ...state,
        isLoading: false,
        books: [],
        total: 0
      };
    }
    case UPDATE_BOOKS_CANCELED: {
      return {
        ...state,
        isLoading: true,
        books: [],
        total: ''
      };
    }
    default:
      return state;
  }
}
