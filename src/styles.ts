import styled from "styled-components";
import { respondTo } from "./assests/GlobalStyles/respondTo";

export const AppWrapper = styled.main`
    ${respondTo.lg`
        display: flex;
        flex-wrap: wrap;
    `}
`;
