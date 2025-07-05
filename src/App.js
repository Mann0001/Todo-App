import './App.css';
import Header from './MyComponents/Header.js';
import { Todos } from './MyComponents/Todos.js';
import { Footer } from './MyComponents/Footer.js';
import { AddTodo } from './MyComponents/AddTodo.js';
import { About } from './MyComponents/About.js';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (task, Description) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      task: task,
      Description: Description
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="Todo.mann" />
        <div className="container mt-5 mb-5">
          <div className="card shadow p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AddTodo addTodo={addTodo} />
                    <Todos todos={todos} onDelete={onDelete} />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>



    </>
  );
}

export default App;
