import styled from "styled-components";
import { marginInForm } from "../../assests/GlobalStyles/globalStylesItems";

export const Wrapper = styled.section`
  margin: 0 5vw;
`;

export const Form = styled.form`
  border: 2px solid black;
`;

export const Subtitle = styled.h3`
  ${marginInForm}
`;

export const ElementsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  ${marginInForm}

  section:nth-last-child() {
    flex-wrap: nowrap;
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin: 0 auto;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 25px;
`;

export const SelectWithArrow = styled(Select)`
  width: 90%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 2vw;
  width: 95.5%;
  height: 25px;
`;

export const Arrow = styled.section`
  width: 10%;
  height: 25px;
`;
