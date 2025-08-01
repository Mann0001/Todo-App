import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh"
  }

  return (
    <div className="container my-3" style={myStyle}>
      <h2 className="mb-3 text-primary">Todos List</h2>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return(
          <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
            <hr></hr>
          </>
          )
        })
      }
    </div>
  )
}
