import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
};
//create reducer function
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((cur, index) => {
        return index !== action.payload; //action.payload is the index of the task to be deleted
      });

      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};
//create a store using reducer
const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
); //apply middleware and composeWithDevTools for dev tools
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
//create a store
console.log(store);

//llog the initial state
console.log(store.getState());

//dispatch rthe store
// store.dispatch(addTask("learn react"));
// store.dispatch(addTask("learn Node.js"));

// store.dispatch(addTask("learn AWS"));

// store.dispatch(addTask("learn MYSQL"));

// console.log("added task", store.getState());
// // store.dispatch({ type: ADD_TASK, payload: "fuck off" });
// console.log("added task", store.getState());
// store.dispatch(deleteTask(1));
// console.log("deleted task", store.getState());

export default store;
