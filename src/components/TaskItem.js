import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleComplete } from "../redux/taskSlice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleComplete(task.id))}
      />
      {isEditing ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
      )}
      <button onClick={() => dispatch(deleteTask(task.id))}>
        <FaTrashAlt />
      </button>
      <button onClick={handleEdit}>
        <FaEdit />
      </button>
    </div>
  );
};

export default TaskItem;
