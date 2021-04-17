import { css } from "styled-components";
import { respondTo } from "./respondTo";

export const HeadAndButtonColor = () => css`
  color: #0e1a2b;
`;

export const h1 = () => css`
  font-size: 34px;
  ${respondTo.xxl`
       font-size: 36px; 
    `}
  color: #ffffff;
`;

export const h2 = () => css`
  font-size: 20px;
  ${respondTo.xxl`
       font-size: 25px; 
  `}
  color: #ffffff;
`;

export const h3 = () => css`
  font-size: 21px;
  color: #ffffff;
  ${respondTo.xxl`
       font-size: 28px; 
    `}
`;

export const p = () => css`
  font-size: 16px;
  color: #c1d1e8;
`;

export const marginInForm = () => css`
  margin: 10px 2vw;
`;

export const backgroundCardAndPanel = () => css`
  background-color: #0e1a2b;
`;

