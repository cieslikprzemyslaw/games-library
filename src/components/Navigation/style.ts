import styled from "styled-components";
import { Link } from "react-router-dom";
import { respondTo } from "../../assests/GlobalStyles/respondTo";

export const Wrapper = styled.section`
  ${respondTo.lg`
    width: 100%;
  `}
`;

export const Nav = styled.nav`
  font-size: 3rem;
  font-weight: 600;
`;

export const UnorderList = styled.ul`
  margin: 5vh 5vw;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  ${respondTo.lg`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  `}
`;

export const ListItem = styled(Link)`
  text-decoration: none;
  color: #030303;
  text-transform: uppercase;

  ${respondTo.lg`
  margin: 0px 5vw;
  `}
`;
