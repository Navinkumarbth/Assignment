

import { useState } from "react";

let initialState = [
  {
    task: "wake up 7am",
    isComplete: false,
  },
];
function TodoList() {
  const [text, setText] = useState();
  const [tasks, setTasks] = useState(initialState);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState("");


  function addTask() {
    if (text.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, { task: text, isComplete: false }]);
    setText("")
  }

  function markComplete(e, i) {
    let newTasks = [...tasks];
    newTasks[i].isComplete = e.target.checked;
    setTasks(newTasks);
  }
  function editTask(i) {
    setEdit(i);
    setEditText(tasks[i].task)
  }
  function saveTask(i) {
    let newTasks = [...tasks]
    newTasks[i].task = editText
    setTasks(newTasks)
    setEdit(null);
  }

  function Delete(i) {
    let taskDelete = tasks.filter((v, idx) => idx !== i);
    setTasks(taskDelete);
    setEdit(null);
    setEditText("");
  }
  return (
    <div>
      <center className="box">
        <h2>ToDo List</h2>
        <input className="inp-a"
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
        />
        <button className="add-b" onClick={addTask}>add task</button>
        <ul>
          {tasks.map((v, i) => {
            return (
              <li className="ed-btn"
                style={{ textDecoration: v.isComplete ? "line-through" : "none" }}
                key={i}
              >
                <input
                  onChange={(e) => markComplete(e, i)}
                  type="checkbox"
                  checked={v.isComplete}
                />
                {edit == i ? (
                  <>
                    {" "}
                    <input className="navin"
                      onChange={(e) => setEditText(e.target.value)}
                      type="text"
                      value={editText}
                    />{" "}
                    <button className="navi" onClick={() => saveTask(i)}>save</button>{" "}
                  </>
                ) : (
                  <>
                    {v.task}{" "}
                    <button className="nav" onClick={() => editTask(i)}>Edit Task</button>
                  </>
                )}
                <button className="del-bt" onClick={() =>
                  Delete(i)
                }>Delete</button>
              </li>
            );
          })}
        </ul>
      </center>
    </div>
  );
}

export default TodoList;
