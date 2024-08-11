import React from 'react'

export default function TodoCard(props) {
  const {children,handleDeleteTodos,id,index,handleEditTodos,handleMoveUpTodos,handleMoveDownTodos} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        {/* Edit Todo */}
        <button onClick={() =>{
          handleEditTodos(id)
        }}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        {/* Delete Todo */}
        <button onClick={() => {
          handleDeleteTodos(id)
        }}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
        {/* Move Up */}
        <button onClick={() => {
          handleMoveUpTodos(index)
        }}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        {/* Move Down */}
        <button onClick={() => {
          handleMoveDownTodos(index)
        }}>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </li>
  )
}
