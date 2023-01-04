import { AppWrapper, GlobalStyled } from "./App.styled-components";
import { TodoList } from "./Components/TodoList/TodoList";

function App() {
  return (
    <AppWrapper>
      <GlobalStyled/>
      <TodoList />
    </AppWrapper>
  );
}

export default App;
