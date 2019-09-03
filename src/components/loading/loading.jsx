import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Loading = props => {
  if (!props.isLoading) {
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

const mapStateToProps = state => ({ isLoading: state.isLoading });

export default connect(mapStateToProps)(Loading);
