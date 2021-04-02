import React from "react";
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

const index = () => {
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
          <Arrow>
            <span>-{">"}</span>
          </Arrow>
          <SelectWithArrow name="" id="order"></SelectWithArrow>
        </ElementsWrapper>
        <Button>Clear</Button>
      </Form>
      <section>api</section>
    </Wrapper>
  );
};

export default index;
