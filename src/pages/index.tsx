import { NextPage } from 'next';

import { Home } from '../features/Home';
import { DefaultLayout } from '../layouts';

/**
 * Home Page
 */
export const HomePage: NextPage = () => {
  // Render
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

/**
 * Get Static Props
 *
 * @returns
 */
export async function getStaticProps() {
  return {
    props: {},
  };
}

// DEFAULT EXPORT
export default HomePage;
