
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList"

function App() {

  return <>
  <div className="todo" id="app">
  <header className="title">Todo List App</header>
  <TodoInput/>
  <TodoList/>
  </div>
  </>;
}

export default App;