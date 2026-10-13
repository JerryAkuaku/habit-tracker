import { use, useState } from "react";

function Habit({ habit, onDelete }) {
  const [completionStatus, setCompletionStatus] = useState(false);

  function handleDone() {
    //completionStatus ? setCompletionStatus(!completionStatus) : nul;
    //alert(habit);

    if (completionStatus) {
      setCompletionStatus(!completionStatus);
    } else {
      setCompletionStatus(!completionStatus);
    }
  }
  return (
    <>
      <div>
        <h4
          style={{ textDecoration: completionStatus ? "line-through" : "none" }}
        >
          {habit}
        </h4>
      </div>
      <div>
        <button onClick={onDelete}> Delete</button>{" "}
        <button onClick={handleDone}>
          {completionStatus ? "Undo" : "Done today"}
        </button>
      </div>
    </>
  );
}

export default Habit;
