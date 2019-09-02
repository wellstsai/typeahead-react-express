import React from 'react';
import { connect } from 'react-redux';
import { updateBooks } from '../../redux/actions';

class Typeahead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({ input });
    this.props.updateBooks(input);
  }

  render() {
    return (
      <input type="text" value={this.state.input} onChange={this.handleChange} autofocus />
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = { updateBooks };

export default connect(mapStateToProps, mapDispatchToProps)(Typeahead);
