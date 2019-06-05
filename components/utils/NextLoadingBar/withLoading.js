import React, { Component, Fragment } from 'react';
import routerEvents from "next-router-events";

import LoadingBar from './';

export default (WrappedComponent, CustomLoadingBar) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        pageLoading: false,
      }
    }

    static getInitialProps(context) {
      const wrappedProps = WrappedComponent.getInitialProps(context);
      return wrappedProps ? wrappedProps : {};
    }

    render() {
      const Loading = CustomLoadingBar ? CustomLoadingBar : LoadingBar;

      return (
        <Fragment>
          <Loading show={this.state.pageLoading} />
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }

    componentDidMount() {
      this.setState(() => ({ pageLoading: false }))
    }
    componentWillMount() {
      routerEvents.on("routeChangeStart", this.pageLoadStart)
      routerEvents.on("routeChangeComplete", this.pageLoadEnd)
    }
    componentWillUnmount() {
      routerEvents.off("routeChangeStart", this.pageLoadStart)
      routerEvents.off("routeChangeComplete", this.pageLoadEnd)
    }

    pageLoadStart = url => {
      const currentUrl = window.location.pathname + window.location.search
      if (url !== currentUrl) {
        this.setState(() => ({ pageLoading: true }))
      }
    }
    pageLoadEnd = url => {
      this.setState(() => ({ pageLoading: false }))
    }
  };
}