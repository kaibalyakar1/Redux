import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../store";
import { MdDelete } from "react-icons/md";
const Tod = () => {
  const [data, setData] = useState("");
  const res = useSelector((state) => state.task); //get the task from the store

  const dispatch = useDispatch();
  console.log(res);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(data));
    setData("");
  };
  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fa-regular fa-pen-to-square mr-2"></i>
          To-do List
        </h1>

        <div className="mb-6">
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Task
            </button>
          </form>
        </div>

        <ul id="list-container" className="space-y-2 flex flex-col">
          {res.map((curr, index) => {
            return (
              <li key={index} className="flex justify-between">
                {" "}
                {index} : {curr}{" "}
                <MdDelete onClick={() => handleDelete(index)} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tod;
