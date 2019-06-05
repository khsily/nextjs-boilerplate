import React, { Component } from 'react';
import Link from 'next/link';

import { LoadingWrapper } from '../../components/utils/NextLoadingBar';

import './home.scss';

class Home extends Component {
  render() {
    return (
      <LoadingWrapper>
        <section id='home'>
          <Link href="/about"><a>about</a></Link>
          <div>Home</div>
        </section>
      </LoadingWrapper>
    );
  }
}

export default Home;