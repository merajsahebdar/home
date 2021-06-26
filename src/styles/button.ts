import { css } from '@emotion/react';
import tw from 'twin.macro';

/**
 * Button Styles
 */
export const buttonStyles = css`
  ${tw`transition-colors`}
  ${tw`px-3 py-2 rounded-lg`}
  ${tw`text-white bg-black dark:bg-white dark:bg-opacity-20`}
  ${tw`hover:dark:bg-opacity-30 active:dark:bg-opacity-40`}
  ${tw`font-sans font-bold text-sm`}
  ${tw`flex flex-row items-center`}

  & > span.icon:first-of-type {
    ${tw`ml-0`}
    ${tw`mr-1`}
  }

  & > span.icon:last-of-type {
    ${tw`ml-1`}
    ${tw`mr-0`}
  }
`;
