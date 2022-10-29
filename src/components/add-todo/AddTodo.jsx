import React from 'react'
import { useState } from 'react'

const AddTodo = ({onAdd}) => {

    const [enteredTask, setEnteredTask] = useState('')

    const inputHandler = (e) => {
        setEnteredTask(e.target.value)
    }

    const addTaskHandler = (e) => {
        e.preventDefault()
        onAdd(enteredTask)
        setEnteredTask('')
    }

  return (
    <form onSubmit={addTaskHandler}>
        <label htmlFor="">
            Write your task
            <input type="text" required onChange={inputHandler} value={enteredTask} />
        </label>
        <button type='submit'>Add New Todo</button>
    </form>
  )
}

export default AddTodo
