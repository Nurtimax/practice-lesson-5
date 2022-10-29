export const initialState = {
  counter: 19,
  todos: [],
};
export const reducer = (state, action) => {
  console.log(state, "state");
  console.log(action, "action");

  if (action.type === "PLUS") {
    const newCounter = state.counter + 1;
    return {
      counter: newCounter,
      todos: [...state.todos, { id: newCounter, task: action.title }],
    };
  }

  if (action.type === "DELETE") {
    const idx = [...state.todos].filter((item) => item.id === action.id);
    return {
      counter: state.counter,
      todos: idx,
    };
  }

  if (action.type === "EDIT") {
    const idx = [...state.todos].map((item) => {
        if (item.id === action.id) {
            item.task = action.value
        }
        return item
    });
    return {
      counter: state.counter,
      todos: idx,
    };
  }





  
  return state;

  //   switch (action.type) {
  //     case "PLUS": {
  //       const newCounter = state.counter + 1;
  //       return {
  //         counter: newCounter,
  //         todos: [...state.todos, { id: newCounter, task: action.title }],
  //       };
  //     }

  //     case "DELETE":
  //       const idx = state.todos.findIndex((item) => item.id === action.id);
  //       const todos = Object.assign([], state.todos);
  //       todos.splice(idx, 1);
  //       return {
  //         counter: state.counter,
  //         todos: todos,
  //       };

  //     case "EDIT": {
  //       const idx = state.todos.findIndex((item) => item.id === action.id);
  //       const todo = Object.assign({}, state.todos[idx]);
  //       todo.task = action.value;

  //       const todos = Object.assign([], state.todos);
  //       todos.splice(idx, 1, todo);
  //       return {
  //         counter: state.counter,
  //         todos: todos,
  //       };
  //     }

  //     default:
  //       return state;
  //   }
};
