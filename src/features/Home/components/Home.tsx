import { css, keyframes } from '@emotion/react';
import tw from 'twin.macro';

/**
 * Home
 *
 * @param {React.ReactElement}
 */
function Home(): React.ReactElement {
  // Render
  return (
    <div
      css={css`
        ${tw`container mx-auto px-2`}
        ${tw`flex flex-col justify-center`}
      `}
    >
      <section>
        <h1>
          <small
            css={css`
              font-size: 40%;
            `}
          >
            Hello World,
          </small>
          <br />
          I&rsquo;m Meraj!
          <small
            css={css`
              ${tw`m-4`}
              ${tw`inline-block`}
              animation-name: ${keyframes`
                0% {
                  transform: rotate(0deg);
                }
                10% {
                  transform: rotate(14deg);
                }
                20% {
                  transform: rotate(-7deg);
                }
                30% {
                  transform: rotate(14deg);
                }
                40% {
                  transform: rotate(-3deg);
                }
                50% {
                  transform: rotate(6deg);
                }
                60% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              `};
              animation-iteration-count: infinite;
              animation-duration: 1800ms;
              transform-origin: 85% 100%;
            `}
          >
            <span role="img" aria-label="hand-shake">
              👋🏻
            </span>
          </small>
        </h1>
      </section>
      <section css={tw`mt-4 py-2`}>
        <p>I&rsquo;m a self-taught Software Engineer, Full Stack and DevOps Engineer.</p>
      </section>
    </div>
  );
}

// DEFAULT EXPORT
export default Home;
