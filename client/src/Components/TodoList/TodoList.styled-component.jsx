import styled from "styled-components";

export const TodoListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  position: absolute;
  left: 60px;
  top: 10px;
  width: 326px;
  height: 15px;
  font-size: 90px;
  color: white;
  margin: 0;
`;

export const Block = styled.div`
  margin-top: 15%;
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 30px 0px 0px 30px;
  border: none;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`;

export const Form = styled.form`
  color: rgba(255, 255, 255, 0.7);
`;

export const SendButton = styled.button`
  height: 50px;
  width: 90px;
  background: #058240;
  border: none;
  border-radius: 0px 30px 30px 0px;
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71vh;
  height: 300px;
  background: rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
`;

export const ItemsBlock = styled.div`
  bottom: 0px;
  width: 71vh;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #78a6c8;
  color: rgba(255, 255, 255, 0.7);
`;

export const Items = styled.p`
  margin: 0 0 0 30px;
`;
