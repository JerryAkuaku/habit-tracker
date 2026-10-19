import { useState } from "react";
import HabitsDashboard from "./pages/habitsdashboard";
import "./App.css";
import initialHabits from "./data/initialHabits";
import CompletedTasks from "./pages/completedTasksPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState("");
  const doneHabits = habits.filter((item) => item.isDone == true);

  function clearDone() {
    setHabits(habits.filter((item) => item.isDone == false));
  }

  return (
    <>
      <nav>
        <Link to="/">Habits</Link> <Link to="/completed"> Completed</Link>
      </nav>{" "}
      <Routes>
        <Route
          path="/"
          element={
            <HabitsDashboard
              habits={habits}
              setHabits={setHabits}
              clearDone={clearDone}
            />
          }
        />
        <Route
          path="/completed"
          element={<CompletedTasks doneHabits={doneHabits} />}
        />
      </Routes>
    </>
  );
}

export default App;
