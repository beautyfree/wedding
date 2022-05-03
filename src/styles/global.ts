import { css } from "@linaria/core";
import { fonts } from "styles/fonts";
import { up } from "styles/breakpoints";

export const global = css`
  :global() {
    ${fonts}

    body {
      font-size: 100%;
      line-height: 1em;
      -webkit-font-smoothing: antialiased;

      ${up.tablet} {
        font-size: 150%;
      }

      ${up.desktop} {
        font-size: 200%;
      }
    }

    a {
      color: #497fa7;
      text-decoration: none;

      &.underline {
        border-bottom: 1px solid #497fa7;
      }
    }

    & ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    & ::-webkit-scrollbar-track {
      background: none;
    }

    & ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }
  }
`;
