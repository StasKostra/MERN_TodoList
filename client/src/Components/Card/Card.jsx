import { useState } from "react";
import { removeTodo } from "../../API/API";
import {
  ButtonDelete,
  CardItemsWrapper,
  CardValue,
} from "./Card.styled-component";
import { AiFillDelete } from "react-icons/ai";
import { Checkbox } from "@nextui-org/react";

export const Card = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const DeleteItem = (_id) => {
    removeTodo(props.card._id);
    const filterData = props.data.filter((el) => {
      return el._id !== _id;
    });
    props.setData(filterData)
  };
  return (
    <CardItemsWrapper>
      <Checkbox
        aria-label="Close"
        color="success"
        checked={checked}
        onChange={handleChange}
      />
      <CardValue checked={checked}>{props.card.text}</CardValue>
      <ButtonDelete onClick={()=>DeleteItem(props.card._id)}>
        {" "}
        <AiFillDelete size={"2em"}></AiFillDelete>
      </ButtonDelete>
    </CardItemsWrapper>
  );
};
