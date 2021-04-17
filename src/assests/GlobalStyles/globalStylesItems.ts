import styled, { css } from "styled-components";
import { respondTo } from "./respondTo";

export const backgroundColor = () => css`
  background-color: #f7f6f5;
`;

export const h1 = () => css`
  font-size: 34px;
  ${respondTo.xxl`
       font-size: 36px; 
    `}
`;

export const h2 = () => css`
  font-size: 20px;
  ${respondTo.xxl`
       font-size: 25px; 
    `}
`;

export const h3 = () => css`
  font-size: 21px;
  ${respondTo.xxl`
       font-size: 28px; 
    `}
`;

export const p = () => css`
  font-size: 16px;
`;

export const marginInForm = () => css`
  margin: 10px 2vw;
`;


