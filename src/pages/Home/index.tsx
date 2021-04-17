import React, { useState } from "react";
import {
  Form,
  Subtitle,
  ElementsWrapper,
  Label,
  Input,
  Select,
  Button,
  Wrapper,
  Arrow,
  SelectWithArrow,
} from "./styles";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import ListOfGames from "../../components/ListOfGames";

const Home = () => {
  const [sortDown, setSortDown] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const changeSorting = () => {
    setSortDown((prev) => !prev);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Wrapper>
      <Form>
        <Subtitle>Filter Results</Subtitle>
        <ElementsWrapper>
          <Label htmlFor="name">Name [contains]</Label>
          <Input type="text" id="name" onChange={handleName} />
        </ElementsWrapper>
        <ElementsWrapper>
          <Label htmlFor="score">Minimum Score</Label>
          <Select name="" id="score"></Select>
        </ElementsWrapper>
        <ElementsWrapper>
          <Label htmlFor="order">Order By</Label>
          <Arrow onClick={changeSorting}>
            {sortDown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
          </Arrow>
          <SelectWithArrow name="" id="order"></SelectWithArrow>
        </ElementsWrapper>
        <Button>Clear</Button>
      </Form>
      <ListOfGames 
        searchQuery={searchQuery}
      />
    </Wrapper>
  );
};

export default Home;
