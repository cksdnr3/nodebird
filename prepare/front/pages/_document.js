import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// styledComponents ssr 적용
import { ServerStyleSheet } from 'styled-components';

// next ssr 설정
export default class MyDocument extends Document {
  // getInitialProps() - document.js 에서만 사용하는 ssr 메서드이다.
  // 다른 페이지에선 getServerSideProps를 사용하자.
  // eslint-disable-next-line consistent-return
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (err) {
      console.error(err);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head><title>Nodebird</title></Head>
        <body>
          <Main />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=es2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019%2Cdefault" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
