import { css } from "styled-components";
import { breakpoints } from "./breakpoints";

export const respondTo = (Object.keys(
  breakpoints
) as (keyof typeof breakpoints)[]).reduce((accumulator, label) => {
  accumulator[label] = (first: any, ...args: any[]) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(first, ...args)};
    }
  `;
  return accumulator;
}, {} as { [key in keyof typeof breakpoints]: any });
