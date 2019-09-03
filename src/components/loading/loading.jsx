import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const Loading = props => {
  const isLoading = useSelector(state => state.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

export default React.memo(Loading);
