import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getTodo = async () => {
  try {
    const todos = await axios.get(baseUrl + "/todos");
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (text,_id) => {
  try {
    const saveTodo = await axios.post(baseUrl + "/add-todo", { text,_id });
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
};

export const removeTodo = async (_id) => {
  try {
    const removeTodo = await axios.post(baseUrl + "/remove-todo", { _id });
    return removeTodo;
  } catch (error) {
    throw new Error(error);
  }
};
