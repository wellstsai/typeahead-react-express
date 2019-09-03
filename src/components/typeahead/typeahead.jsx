import React from 'react';
import { connect } from 'react-redux';
import { updateBooks } from '../../redux/actions';

class Typeahead extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.props.updateBooks(input, 1);
  }

  render() {
    return (
      <input type="text" value={this.props.query} onChange={this.handleChange} autofocus />
    );
  }
}

const mapStateToProps = state => ({ query: state.query });

const mapDispatchToProps = { updateBooks };

export default connect(mapStateToProps, mapDispatchToProps)(Typeahead);
