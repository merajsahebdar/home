import { css } from '@emotion/react';
import tw from 'twin.macro';

/**
 * Link Styles
 */
export const linkStyles = css`
  ${tw`text-black dark:text-white`}
  ${tw`font-sans font-medium underline`}
  ${tw`flex flex-row items-center`}

  & > span.icon:last-of-type {
    ${tw`ml-1`}
  }

  & > span.icon:first-of-type {
    ${tw`ml-0`}
  }
`;
