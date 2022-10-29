import { useReducer } from 'react';
import './App.css';
import AddTodo from './components/add-todo/AddTodo';
import TodoList from './components/todo-list/TodoList';
import { initialState, reducer } from './store/reducer';

function App() {

  const [state, dispatchFn] = useReducer(reducer, initialState)

  const addTodo = (exircise) => {
    console.log(exircise);
    dispatchFn({type: 'PLUS', title: exircise})
  }

  const deleteTask = (id) => {
    console.log(id);
    dispatchFn({type: 'DELETE', id: id})
  }

  const editTask = (id,text) => {
    dispatchFn({type: 'EDIT', value: text, id: id})
  }

  return (
    <div className="App">
     <h1>My Todo App</h1>
     <AddTodo onAdd={addTodo}/>
     {state.todos.map((item) => (
      <TodoList {...item} key={item.id} onDelete={deleteTask} editTask={editTask} />
     ))}
    </div>
  );
}

export default App;
