import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyled = createGlobalStyle`
body{
    font-family: 'Monda', sans-serif;
}
`;


const gradient = keyframes`
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}
`;

export const AppWrapper = styled.div`
  padding: 0;
  width: 100%;
  min-height: 100vh;
  animation: ${gradient} 7s ease-in-out infinite;
  background: linear-gradient(to right, #02244f, #122954, #0c253f);
  background-size: 300%;
`;
