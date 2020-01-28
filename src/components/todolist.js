import React, { useEffect, useState } from "react";

export const TodoList = ({ todos }) => {
  const [doneTodos, setDoneTodos] = useState([]);
  const [notDoneTodos, setNotDoneTodos] = useState([]);

  useEffect(() => {
    setDoneTodos({
      done: todos.filter(todo => todo.completed)
    });
    setNotDoneTodos({
      notdone: todos.filter(todo => !todo.completed)
    });
  }, []);

  return (
    <div>
      {<h4>Things to do:</h4>}
      {notDoneTodos &&
        notDoneTodos.map(todo => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setCurrentTodos(todos =>
                  todos.map(current =>
                    current.id === todo.id ? !todo.completed : todo.completed
                  )
                )
              }
            />
          </div>
        ))}
      {doneTodos && <h4>Things I've done:</h4>}
      {doneTodos &&
        doneTodos.map(todo => {
          <div key={todo.id}>
            <span>{todo.title}</span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setCurrentTodos(todos =>
                  todos.map(current =>
                    current.id === todo.id ? !todo.completed : todo.completed
                  )
                )
              }
            />
          </div>;
        })}
    </div>
  );
};
