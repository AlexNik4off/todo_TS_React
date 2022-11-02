import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { Todo } from "./todomodel";
import ListOfToDos from "./components/ListOfToDos";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todolist, setTodolist] = useState<Array<Todo>>([]);

  const handleAddingTodoItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodolist([
        ...todolist,
        { id: Date.now(), todoitem: todo, completed: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="app__title">Todo List</span>
      <AddTask
        todo={todo}
        setTodo={setTodo}
        handleAddingTodoItem={handleAddingTodoItem}
      />
      <ListOfToDos todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
};

export default App;
