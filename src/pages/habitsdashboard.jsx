//import initialHabits from "../data/initialHabits";
import Habit from "../components/habit";
import { useState } from "react";
function HabitsDashboard({ habits, setHabits, clearDone }) {
  // const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState("");
  // const doneHabits = habits.filter((item) => item.isDone == true);

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

  function handleDelete(id) {
    setHabits(habits.filter((item) => item.id !== id));
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
      {/*<p>{initialHabits[0].content}</p>*/}
    </>
  );
}

export default HabitsDashboard;
