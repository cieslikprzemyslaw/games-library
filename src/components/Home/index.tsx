import { useState} from "react";
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
import useAsyncFetch from "../../services/useAsyncFetch";
import ListOfGames from "./ListOfGames";

const Home = () => {
  const url = "https://public.connectnow.org.uk/applicant-test/";
  const data = useAsyncFetch(url);

  const [sortDown, setSortDown] = useState(true);

  const changeSorting = () => {
    setSortDown(!sortDown);
  };

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
            {sortDown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
          </Arrow>
          <SelectWithArrow name="" id="order"></SelectWithArrow>
        </ElementsWrapper>
        <Button>Clear</Button>
      </Form>
      <ListOfGames
        {...data}
      />
    </Wrapper>
  );
};

export default Home;
