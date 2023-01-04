import { useEffect } from "react";
import { useState } from "react";
import { addTodo, getTodo } from "../../API/API";
import { Card } from "../Card/Card";
import { MessageBlock } from "../Card/MessageBlock/MessageBlock";
import {
  Block,
  CardWrapper,
  Form,
  HeaderTitle,
  Input,
  Items,
  ItemsBlock,
  SendButton,
  TodoListWrapper,
} from "./TodoList.styled-component";
import { ObjectID } from "bson";

export const TodoList = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    getTodo()
      .then(({ data: { todos } }) => setData(todos))
      .catch((err) => console.log(err));
  };

  const InputChange = (e) => {
    setText(e.target.value);
  };

  const SendOnClick = () => {
    const _id = new ObjectID().toString();
    if (text) {
      data.push({ text, _id });
      addTodo(text, _id)
        .then((res) => {
          setText("");
        })
        .catch((err) => console.log(err));
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <TodoListWrapper>
      <HeaderTitle>TODO</HeaderTitle>
      <Block>
        <Form onSubmit={onFormSubmit}>
          <Input
            value={text}
            onChange={InputChange}
            placeholder={"Create a new todo..."}
          />
          <SendButton type="submit" onClick={SendOnClick}>
            {
              <svg
                width="60"
                height="18"
                viewBox="0 0 56 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.8394 2.50969C38.8238 2.79836 41.5346 12.2524 41.3919 16.9433"
                  stroke="white"
                  strokeWidth="4"
                />
                <line
                  x1="0.828796"
                  y1="2.14552"
                  x2="29.9339"
                  y2="2.14552"
                  stroke="white"
                  strokeWidth="4"
                />
                <path
                  d="M39.8439 32.0585C40.6249 32.8523 41.891 32.8729 42.672 32.1046L55.3982 19.5841C56.1791 18.8158 56.1791 17.5495 55.3982 16.7557C54.6172 15.9619 53.3511 15.9413 52.5701 16.7096L41.2579 27.8389L29.9457 16.3408C29.1648 15.547 27.8986 15.5263 27.1177 16.2947C26.3367 17.063 26.3367 18.3293 27.1177 19.1231L39.8439 32.0585ZM39.2582 15.4553L39.2582 30.6347L43.2577 30.6999L43.2577 15.5205L39.2582 15.4553Z"
                  fill="white"
                />
              </svg>
            }
          </SendButton>
        </Form>
        <CardWrapper>
          {data.length === 0 ? (
            <MessageBlock />
          ) : (
            data.map((card) => {
              return (
                <Card
                  card={card}
                  key={card._}
                  data={data}
                  setData={setData}
                />
              );
            })
          )}
        </CardWrapper>
        <ItemsBlock>
          <Items>{data.length} items</Items>
        </ItemsBlock>
      </Block>
    </TodoListWrapper>
  );
};
