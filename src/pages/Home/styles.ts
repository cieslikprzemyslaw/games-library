import styled from "styled-components";
import { backgroundCardAndPanel, marginInForm } from "../../assests/GlobalStyles/globalStylesItems";
import { respondTo } from "../../assests/GlobalStyles/respondTo";

export const Wrapper = styled.section`
  margin: 0 5vw;

  ${respondTo.lg`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
  `}
`;

export const Form = styled.section`
  border: 2px solid black;
  height: 300px;
  ${backgroundCardAndPanel}

  ${respondTo.md`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  section:nth-child(3) {
    width: 25%;
  }
  section:nth-child(4) {
    width: 50%;
  }
  `}

  ${respondTo.lg`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  section:nth-child(3) {
    width: 100%;
  }
  section:nth-child(4) {
    width: 100%;
  }
  `}
`;

export const Subtitle = styled.h3`
  ${marginInForm}

  ${respondTo.md`
    width: 100%
  `}
  
`;

export const ElementsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  ${marginInForm}

  ${respondTo.md`
    width: 100%;
  `}
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
  color: #fff;
`;

export const Input = styled.input`
  margin: 0 auto;
  height: 25px;
  width: 100%;
  background-color: #182c47;
  color: #c1d1e8;
`;

export const Select = styled.select`
  width: 100%;
  height: 25px;
  background-color: #182c47;
`;

export const SelectWithArrow = styled(Select)`
  width: 90%;
  background-color: #182c47;
  color: #fff;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 2vw;
  width: 95.5%;
  height: 25px;
  background-color: #5692e8;
  color: #fff;
  ${respondTo.md`
    width: 70px;
    align-self: center;
    margin-top: 10px;
  `};
`;

export const Arrow = styled.section`
  width: 10%;
  height: 25px;
  background-color: #5692e8;
  color: #fff;
`;
