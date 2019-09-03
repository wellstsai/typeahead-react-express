import React from 'react';

const TableRow = ({ title, author }) => (
  <tr>
    <td>{title}</td>
    <td>{author}</td>
  </tr>
);

export default React.memo(TableRow);
