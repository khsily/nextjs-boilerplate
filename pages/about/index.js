import React, { Component } from 'react';
import Link from 'next/link';

import { LoadingWrapper } from '../../components/utils/NextLoadingBar';

class About extends Component {
  render() {
    return (
      <LoadingWrapper>
        <section id='about'>
          <Link href="/"><a>home</a></Link>
          <div>About</div>
        </section>
      </LoadingWrapper>
    );
  }
}

export default About;