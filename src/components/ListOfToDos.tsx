import React from 'react'
import { Todo } from "../todomodel"
import ToDoCard from './ToDoCard';
import './styles.css';


interface props {
    todolist: Todo[];
    setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>

}

const ListOfToDos: React.FC<props>= ({ todolist, setTodolist }) => {
  return (
    <div className='todolist'>
      {todolist.map((todo) => (
        <ToDoCard todo={todo} todolist={todolist} key={todo.id} setTodolist={setTodolist}/>
      ))}
    </div>
  );
};

export default ListOfToDos