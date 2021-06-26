import { css } from '@emotion/react';
import Link from 'next/link';
import { FC } from 'react';
import tw from 'twin.macro';

import { ExternalLinkIcon, MailIcon } from '../../../images';
import { buttonStyles, linkStyles } from '../../../styles';

/**
 * Header
 */
export const Header: FC = () => {
  // Render
  return (
    <header css={tw`fixed w-full`}>
      <nav
        css={css`
          ${tw`container mx-auto px-2`}
        `}
      >
        <ul
          css={css`
            ${tw`-mx-2 h-16`}
            ${tw`flex flex-row items-center`}
            ${tw`list-none`}

            & > li {
              ${tw`px-2`}
              ${tw`font-sans text-sm`}
            }
          `}
        >
          <li>
            <Link href="/" passHref>
              <a css={linkStyles}>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <a
              css={linkStyles}
              href="https://github.com/merajsahebdar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className="icon">
                <ExternalLinkIcon />
              </span>
            </a>
          </li>
          <li css={tw`ml-auto`} />
          <li suppressHydrationWarning>
            {process.browser && (
              <a css={buttonStyles} href="mailto:itsdrewstiles@gmail.com">
                <span className="icon">
                  <MailIcon />
                </span>
                <span>Contact</span>
              </a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
