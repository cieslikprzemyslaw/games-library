import { Nav, UnorderList, ListItem, Wrapper } from "./style";

const index = () => {
    return (
      <Wrapper>
        <Nav>
          <UnorderList>
            <ListItem
              to="/video"
              activeStyle={{
                textShadow: "-18px -18px 2px #FFFFFF",
              }}
            >
              video games
            </ListItem>
            <ListItem
              to="/contact"
              activeStyle={{ textShadow: "18px -18px 2px #FFFFFF" }}
            >
              contact
            </ListItem>
          </UnorderList>
        </Nav>
      </Wrapper>
    );
};

export default index;