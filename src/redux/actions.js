import { UPDATE_BOOKS_SUCCESS, UPDATE_BOOKS_STARTED, UPDATE_BOOKS_FAILED } from './actionTypes';
import axios from 'axios';

const updateBooksSuccess = data => ({
  type: UPDATE_BOOKS_SUCCESS,
  payload: {
    books: data.books,
    total: data.total
  }
});

const updateBooksStarted = () => ({
  type: UPDATE_BOOKS_STARTED
});

const updateBooksFailed = source => ({
  type: UPDATE_BOOKS_FAILED,
});


let cancel;
const CancelToken = axios.CancelToken;
export const updateBooks = query => {
  return (dispatch, getState) => {
    const { isLoading, source } = getState();
    const page = 1;
    if (cancel) {
      cancel();
      cancel = null;
    }

    dispatch(updateBooksStarted());

    axios.get(`/search/${query}/${page}`, { cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    })
      .then(response => dispatch(updateBooksSuccess(response.data)))
      .catch(() => dispatch(updateBooksFailed()));
  };
};
