import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../todomodel";
import { MdDone, MdCreate, MdOutlineClose } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: Todo;
  todolist: Todo[];
  setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ToDoCard = ({ todo, todolist, setTodolist }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todo.todoitem);

  const handleCompleted = (id: number) => {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodolist(todolist.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodolist(
      todolist.map((todo) =>
        todo.id === id ? { ...todo, todoitem: editToDo } : todo
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todocard" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          className="todocard__text"
          value={editToDo}
          ref={inputRef}
          onChange={(e) => setEditToDo(e.target.value)}
        />
      ) : todo.completed ? (
        <s className="todocard__text">{todo.todoitem}</s>
      ) : (
        <span className="todocard__text">{todo.todoitem}</span>
      )}
      <div>
        <div>
          <span
            className="todocard__icon"
            onClick={() => {
              if (!edit && !todo.completed) {
                setEdit(!edit);
              }
            }}
          >
            <MdCreate />
          </span>
          <span
            className="todocard__icon"
            onClick={() => handleDelete(todo.id)}
          >
            <MdOutlineClose />
          </span>
          <span className="todocard__icon">
            <MdDone onClick={() => handleCompleted(todo.id)} />
          </span>
        </div>
      </div>
    </form>
  );
};

export default ToDoCard;
