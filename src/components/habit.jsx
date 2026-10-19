import { use, useState } from "react";

function Habit({ habit, onDelete, toggleDone }) {
  return (
    <>
      <div>
        <h4 style={{ textDecoration: habit.isDone ? "line-through" : "none" }}>
          {habit.content}
        </h4>
      </div>
      <div>
        <button onClick={onDelete}> Delete</button>{" "}
        <button onClick={() => toggleDone(habit.id)}>
          {habit.isDone ? "Undo" : "Done today"}
        </button>
      </div>
    </>
  );
}

export default Habit;
