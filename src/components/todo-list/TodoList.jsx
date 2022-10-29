import React from "react";
import { useState } from "react";

const TodoList = ({ task, id, onDelete, editTask }) => {
  const [isShow, setIsShow] = useState(true);
  const [text, setText] = useState(task)

  const toggleHandler = () => {
    setIsShow((prevState) => !prevState);
  };

  const deleteTask = () => {
    onDelete(id);
  };

  const changeHandler = (e) => {
    setText(e.target.value)
  }

  const editHandler = () => {
    editTask(id, text)
    toggleHandler()
  }

  return (
    <div>
      {isShow ? (
        <>
          <span>{task}</span>
          <button onClick={toggleHandler}>edit</button>
          <button onClick={deleteTask}>delete</button>
        </>
      ) : (
        <>
        <input type="text" value={text} onChange={changeHandler}  />
        <button onClick={editHandler}>Save</button>
        <button onClick={toggleHandler}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default TodoList;
