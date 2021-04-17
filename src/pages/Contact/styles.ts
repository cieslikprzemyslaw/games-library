import styled from "styled-components";
import { marginInForm } from "../../assests/GlobalStyles/globalStylesItems";
import { respondTo } from "../../assests/GlobalStyles/respondTo";

export const ContactWrapper = styled.section`
  margin: 0 5vw;

  ${respondTo.lg`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const TextSection = styled.section`
  margin: 3vh 0;
  ${respondTo.lg`width: 50%;`}
`;

export const Title = styled.h2`
  margin-bottom: 3vh;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: #c1d1e8;
`;

export const Star = styled.span`
  color: #5692e8;
`;

export const Textarea = styled.textarea`
  width: 95.5%;
  background-color: #182c47;
  color: #c1d1e8;
  ${respondTo.md` 
    width: 100%;
  `}
`;

export const Form = styled.form`
  border: 2px solid black;
  background-color: #0e1a2b;
  
  ${respondTo.md`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  section:nth-child(2) {
    width: 38%;
  }
  section:nth-child(3) {
    width: 38%;
  }
  `} ${respondTo.lg`width: 55%;`};
`;

export const Subtitle = styled.h3`
  ${marginInForm}
  width: 100%;
`;

export const ElementsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  ${marginInForm}

  ${respondTo.md`width: 100%;`}
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
  color: #fff;
`;

export const Input = styled.input`
  margin: 0 auto;
  width: 100%;
  height: 25px;
  background-color: #182c47;
  color: #c1d1e8;
`;

export const Select = styled.select`
  width: 100%;
  height: 25px;
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
`;

export const Arrow = styled.section`
  width: 10%;
  height: 25px;
`;
