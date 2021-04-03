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

const Home = () => {

  const [sortDown, setSortDown] = useState(true)

  const changeSorting = () => {
    setSortDown(!sortDown);
  }

  return (
    <Wrapper>
      <Form action="">
        <Subtitle>Filter Results</Subtitle>
        <ElementsWrapper>
          <Label htmlFor="name">Name [contains]</Label>
          <Input type="text" id="name" />
        </ElementsWrapper>
        <ElementsWrapper>
          <Label htmlFor="score">Minimum Score</Label>
          <Select name="" id="score"></Select>
        </ElementsWrapper>
        <ElementsWrapper>
          <Label htmlFor="order">Order By</Label>
          <Arrow onClick={changeSorting}>
            {sortDown ? <AiOutlineArrowDown/> : <AiOutlineArrowUp/>}
          </Arrow>
          <SelectWithArrow name="" id="order"></SelectWithArrow>
        </ElementsWrapper>
        <Button>Clear</Button>
      </Form>
      <section style={{width: "50%"}}>api</section>
    </Wrapper>
  );
};

export default Home;
