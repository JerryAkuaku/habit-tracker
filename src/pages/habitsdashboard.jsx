import initialHabits from "../data/initialHabits";
import Habit from "../components/habits";
import { useState } from "react";
function HabitsDashboard() {
  const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState("");

  function handleDelete(position) {
    setHabits(habits.filter((item, index) => index !== position));
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
      <ul>
        {habits.map((item, index) => (
          <li key={item}>
            <Habit habit={item} onDelete={() => handleDelete(index)}></Habit>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HabitsDashboard;
