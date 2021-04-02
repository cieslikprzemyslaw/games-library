import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
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
`;

export const ListItem = styled(Link)`
  text-decoration: none;
  color: #030303;
  text-transform: uppercase;
`;
