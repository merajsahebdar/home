import { css } from '@emotion/react';
import { FC, Fragment, useMemo } from 'react';
import tw from 'twin.macro';

import { InstagramIcon, LinkedInIcon, TwitterIcon, Logo } from '../../../images';
import { linkStyles } from '../../../styles';

// First Publish Year
const FIRST_PUBLISH_YEAR = 2020;

// Social Medias Links
const links = [
  {
    Icon: InstagramIcon,
    title: 'Instagram',
    link: 'https://www.instagram.com/merajcodes',
  },
  {
    Icon: TwitterIcon,
    title: 'Twitter',
    link: 'https://www.twitter.com/merajsahebdar',
  },
  {
    Icon: LinkedInIcon,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/merajsahebdar',
  },
];

/**
 * Footer
 */
export const Footer: FC = () => {
  // Rendered: Year
  const renderedYear = useMemo(() => {
    const currentYear = new Date().getUTCFullYear();

    if (currentYear === FIRST_PUBLISH_YEAR) {
      return FIRST_PUBLISH_YEAR;
    }

    return (
      <Fragment>
        {FIRST_PUBLISH_YEAR} &ndash; {currentYear}
      </Fragment>
    );
  }, []);

  // Render
  return (
    <footer>
      <div
        css={css`
          ${tw`container mx-auto px-2`}
        `}
      >
        <section
          css={css`
            ${tw`my-2`}
          `}
        >
          <ul
            css={css`
              ${tw`-mx-2`}
              ${tw`flex flex-row items-center`}

              & > li {
                ${tw`px-2`}
              }
            `}
          >
            {links.map(({ Icon, title, link }, linkIndex) => (
              <li key={`links_n${linkIndex}`}>
                <a
                  css={linkStyles}
                  title={title}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <Icon />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section
          css={css`
            ${tw`my-4`}
            ${tw`flex flex-row items-center`}
          `}
        >
          <p
            css={css`
              ${tw`text-xs`}
              ${tw`flex-1`}
            `}
          >
            &copy; {renderedYear} &mdash; Meraj Sahebdar
            <br />
            All rights preserved in the &ldquo;Dead Man&rsquo;s Chest&rdquo;.
          </p>
        </section>
      </div>
    </footer>
  );
};
