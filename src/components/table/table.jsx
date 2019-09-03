import React from 'react';
import { connect } from 'react-redux';
import TableBody from './subComponents/tableBody';
import TableHeader from './subComponents/tableHeader';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { total } = this.props;
    return (
      <React.Fragment>
        <h2>{`Results: ${total || ''}`}</h2>
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ total: state.total });

export default connect(mapStateToProps)(Table);