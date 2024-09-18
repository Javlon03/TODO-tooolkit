import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/taskSlice";

const TaskFilters = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.tasks);

  return (
    <div className="task-filters">
      <button
        onClick={() => dispatch(setFilter("In Progress"))}
        className={filter === "In Progress" ? "active" : ""}
      >
        Em Andamento
      </button>
      <button
        onClick={() => dispatch(setFilter("Completed"))}
        className={filter === "Completed" ? "active" : ""}
      >
        Concluídas
      </button>
      <button
        onClick={() => dispatch(setFilter("All"))}
        className={filter === "All" ? "active" : ""}
      >
        Todas
      </button>
    </div>
  );
};

export default TaskFilters;
