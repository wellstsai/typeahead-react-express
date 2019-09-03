import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import TableRow from './tableRow';
import { updateBooks } from '../../../redux/actions'

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.tbodyRef = React.createRef();
    this.handleScroll = debounce(this.handleScroll.bind(this), 400, { maxWait: 400 });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lastPageFetched > 1 && this.props.lastPageFetched === 1) {
      this.tbodyRef.current.scrollTo(0,0);
    }
  }

  handleScroll(e) {
    const { updateBooks, query, lastPageFetched, isLoading, total } = this.props;
    const el = this.tbodyRef.current;
    const offset = 275;
    const bottom = el.scrollHeight - el.scrollTop <= el.clientHeight + offset;
    if (bottom && !isLoading && (lastPageFetched < total/100) ) {
      updateBooks(query, lastPageFetched + 1);
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

const mapStateToProps = state => ({
  books: state.books,
  query: state.query,
  lastPageFetched: state.lastPageFetched,
  isLoading: state.isLoading,
  total: state.total
});
const mapDispatchToProps = { updateBooks };

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
