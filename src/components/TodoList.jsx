import React from 'react';
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleEditTodos, handleDeleteTodos, handleMoveUpTodos, handleMoveDownTodos } = props;

  return (
    <ul className='main'>
      {todos.map((todo, index) => (
        <TodoCard 
          key={todo.id} 
          id={todo.id} 
          index={index} 
          handleEditTodos={handleEditTodos} 
          handleDeleteTodos={handleDeleteTodos} 
          handleMoveUpTodos={handleMoveUpTodos} 
          handleMoveDownTodos={handleMoveDownTodos}
        >
          <p>{todo.todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
