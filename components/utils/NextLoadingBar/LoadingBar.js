import React, { Component, Fragment } from 'react';

import './LoadingBar.scss';

class LoadingBar extends Component {
  render() {
    const { show } = this.props;

    if (!show) return null;
    return (
      <Fragment>
        <div className='top-loading-bar bar1'></div>
        <div className='top-loading-bar bar2'></div>
        <div className='top-loading-bar bar3'></div>
        <div className='top-loading-bar bar4'></div>
      </Fragment>
    )
  }
};

export default LoadingBar;