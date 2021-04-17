import { createGlobalStyle } from "styled-components";
import "./index.css";
import { h1, h2, h3, HeadAndButtonColor, p } from "./globalStylesItems";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-size: 62.5%; /* 1 rem = 10px, 10px/16p = 62.5% */
}
body {
  font-family: Open Sans;
  font-size: 1.6rem ;
  background: rgb(8,18,33);
  background: linear-gradient(90deg, rgba(8,18,33,1) 0%, rgba(0,0,0,1) 100%);
  font-weight: 300 ;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;   
}
h1{
  ${h1}
}
h2 { 
  ${h2}
  font-weight: 600;
}
h3{
  ${h3}
}
p{
  ${p}
}
img {
    max-width: 100%;
    height: auto;
}
button{
  ${HeadAndButtonColor}
}
`;
