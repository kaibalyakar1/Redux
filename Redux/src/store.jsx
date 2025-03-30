import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
};

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

const store = createStore(taskReducer, composeWithDevTools());
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
