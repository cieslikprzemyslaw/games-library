import React, { useState, useEffect } from "react";
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
  Option,
} from "./styles";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import ListOfGames from "../../components/ListOfGames";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const [sortDown, setSortDown] = useState(true);
  const [volume, setVolume] = useState(10);
  const [order, setOrder] = useState<"name" | "rate">("name");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    history.push("/video");
  }, []);

  const changeSorting = () => {
    setSortDown((prev) => !prev);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVolume(+e.target.value);
  };

  const handleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value as "name" | "rate");
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
          <Select value={volume} id="score" onChange={handleVolume}>
            <Option value={10}>1-10</Option>
            <Option value={25}>1-25</Option>
            <Option value={50}>1-50</Option>
          </Select>
        </ElementsWrapper>
        <ElementsWrapper>
          <Label htmlFor="order">Order By</Label>
          <Arrow onClick={changeSorting}>
            {sortDown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
          </Arrow>
          <SelectWithArrow value={order} id="order" onChange={handleOrder}>
            <Option value="name">Name</Option>
            <Option value="rate">Rate</Option>
          </SelectWithArrow>
        </ElementsWrapper>
        <Button>Clear</Button>
      </Form>
      <ListOfGames searchQuery={searchQuery} volume={volume} order={order} sortDescending={sortDown} />
    </Wrapper>
  );
};

export default Home;
