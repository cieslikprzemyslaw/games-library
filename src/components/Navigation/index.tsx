import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, UnorderList, ListItem, Wrapper } from "./style";

const index = () => {
    return (
      <Wrapper>
        <Nav>
          <UnorderList>
            <ListItem to="/">video games</ListItem>
            <ListItem to="/contact">contact</ListItem>
          </UnorderList>
        </Nav>
      </Wrapper>
    );
};

export default index;