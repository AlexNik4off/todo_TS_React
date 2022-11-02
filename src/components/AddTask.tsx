import React, { useRef } from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddingTodoItem: (e: React.FormEvent) => void;
}

const AddTask: React.FC<props> = ({ todo, setTodo, handleAddingTodoItem }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="task__add"
      onSubmit={(e) => {
        handleAddingTodoItem(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a task here"
        className="add__task__input"
      />
      <button type="submit" className="add__task__button">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
