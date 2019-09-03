import React from 'react';
import { useSelector } from 'react-redux';
import TableBody from './subComponents/tableBody';
import TableHeader from './subComponents/tableHeader';

const Table = () => {
  const total = useSelector(state => state.total);
  return (
    <React.Fragment>
      <h2>{`Results: ${total || ''}`}</h2>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </React.Fragment>
  );
};

export default React.memo(Table);
