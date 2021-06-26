import { css } from '@emotion/react';
import { Children, FC, Fragment, isValidElement } from 'react';

import { Footer, Header } from './components';

// Default Layout Properties
type DefaultLayoutProperties = React.PropsWithChildren<Record<string, unknown>>;

/**
 * Default Layout
 */
export const DefaultLayout: FC<DefaultLayoutProperties> = properties => {
  // Render
  return (
    <Fragment>
      <Header />
      <main
        css={css`
          display: flex;
          flex-grow: 1;
        `}
      >
        {Children.map(properties.children, child => {
          if (isValidElement(child)) {
            return child;
          }
        })}
      </main>
      <Footer />
    </Fragment>
  );
};
