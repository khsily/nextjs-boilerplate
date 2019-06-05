import Document, { Head, Main, NextScript } from 'next/document';

import '../styles/styles.scss';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/normalize.css@8.0.0/normalize.css" />
          <link rel="stylesheet" href="/static/fonts/font.css" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />

          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
          <script src="/static/scripts/browserSupport.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}