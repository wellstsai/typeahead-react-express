import React from 'react';
import { connect } from 'react-redux';
import TableRow from './tableRow';
import debounce from 'lodash.debounce';

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.tbodyRef = React.createRef();
    this.handleScroll = debounce(this.handleScroll.bind(this), 50);
  }

  handleScroll(e) {
    console.log('sroll')
    const el = this.tbodyRef.current;
    const offset = 50;
    const bottom = el.scrollHeight - el.scrollTop <= el.clientHeight + offset;
    if (bottom) {
      console.log('hit bot')
    }
  }

  render() {
    return (
      <tbody ref={this.tbodyRef} onScroll={this.handleScroll}>
        {
          this.props.books.map(book => (<TableRow title={book.title} author={book.author} />))
        }
      </tbody>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(TableBody);
