import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.scss';
import Typeahead from './components/typeahead/typeahead';
import Table from './components/table/table';

ReactDOM.render(
  <Provider store={store}>
    <section id="app">
      <h1>Book Search</h1>
      <Typeahead />
      <Table />
    </section>
  </Provider>,
  document.getElementById('root')
);
