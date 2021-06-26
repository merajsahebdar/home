import { css, Global } from '@emotion/react';
import tw, { GlobalStyles as TailwindStyles } from 'twin.macro';
import NextApp, { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

/**
 * App Styles
 */
const appStyles = css`
  html {
    height: 100%;
  }

  body {
    ${tw`m-0 p-0 h-full`}
    ${tw`text-black dark:text-white bg-white dark:bg-black`}
    ${tw`font-sans text-base`}

    & > div:first-of-type {
      ${tw`flex flex-col items-stretch`}
      min-height: 100%;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-black`}
  }

  h1 {
    ${tw`text-5xl sm:text-6xl md:text-7xl`}
  }

  h2 {
    ${tw`text-4xl sm:text-5xl md:text-6xl`}
  }

  h3 {
    ${tw`text-3xl sm:text-4xl md:text-5xl`}
  }

  h4 {
    ${tw`text-2xl sm:text-3xl md:text-4xl`}
  }

  h5 {
    ${tw`text-xl sm:text-2xl md:text-3xl`}
  }

  h6 {
    ${tw`text-lg sm:text-xl md:text-2xl`}
  }
`;

/**
 * App
 */
export class App extends NextApp<AppProps> {
  /**
   * Component Did Mount
   */
  componentDidMount() {
    // Remove SSR Injected Styles
    const jssStylesElement = document.querySelector('#jss-server-side');
    if (jssStylesElement) {
      jssStylesElement.remove();
    }
  }

  /**
   * Render
   *
   * @returns
   */
  render() {
    const { Component, pageProps } = this.props;

    // Render
    return (
      <Fragment>
        <Head>
          <title>Meraj Sahebdar</title>
          <TailwindStyles />
          <Global styles={appStyles} />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

// DEFAULT EXPORT
export default App;
