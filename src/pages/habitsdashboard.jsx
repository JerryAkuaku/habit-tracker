import Habit from "../components/habit";
import { useState } from "react";
function HabitsDashboard({ habits, setHabits, clearDone, handleDelete }) {
  const [newHabit, setNewHabit] = useState("");

  function toggleDone(id) {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          return { ...habit, isDone: !habit.isDone };
        } else {
          return habit;
        }
      }),
    );
  }

  function handleAdd() {
    setHabits([...habits, newHabit]);
    setNewHabit("");
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add a habit"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div style={{ marginTop: "16px" }}>
        <button onClick={clearDone}>Clear completed tasks</button>
      </div>
      <ul>
        {habits.map((item, index) => (
          <li key={item.id}>
            <Habit
              habit={item}
              onDelete={() => handleDelete(item.id)}
              toggleDone={toggleDone}
            ></Habit>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HabitsDashboard;
