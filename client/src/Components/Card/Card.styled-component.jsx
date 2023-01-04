import styled from "styled-components";

export const CardItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-height: 70px;
  border-bottom: 1px solid #058240;
`;

export const CardValue = styled.p`
  font-family: 'Monda', sans-serif;
  color: rgba(255, 255, 255, 0.7);
  font-family: monda;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  width: 70px;
  background: none;
  border: none;
  color: #78a6c8;
`;


