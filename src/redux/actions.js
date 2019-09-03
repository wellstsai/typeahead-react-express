import { UPDATE_BOOKS_SUCCESS, UPDATE_BOOKS_STARTED, UPDATE_BOOKS_FAILED, UPDATE_BOOKS_CANCELED } from './actionTypes';
import axios from 'axios';

const updateBooksSuccess = data => ({
  type: UPDATE_BOOKS_SUCCESS,
  payload: {
    books: data.books,
    total: data.total
  }
});

const updateBooksStarted = (query, page) => ({
  type: UPDATE_BOOKS_STARTED,
  payload: { query, page }
});

const updateBooksFailed = () => ({
  type: UPDATE_BOOKS_FAILED
});

const updateBooksCanceled = () => ({
  type: UPDATE_BOOKS_CANCELED
})

/* 
  Used thunk middleware to handle async requests here and cancellations
 */
let cancel;
const CancelToken = axios.CancelToken;
export const updateBooks = (query, page) => {
  return (dispatch, getState) => {
    const { isLoading, source } = getState();
    if (cancel) {
      cancel();
      cancel = null;
    }

    dispatch(updateBooksStarted(query, page));

    axios.get(`/search/${query}/${page}`, { cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    })
      .then(response => dispatch(updateBooksSuccess(response.data)))
      .catch((e) => {
        if (axios.isCancel(e)) {
          return dispatch(updateBooksCanceled())
        } else {
          return dispatch(updateBooksFailed());
        }
      });
  };
};
