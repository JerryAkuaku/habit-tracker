import { useState } from "react";
import HabitsDashboard from "./pages/habitsdashboard";
import "./App.css";
import initialHabits from "./data/initialHabits";
import CompletedTasks from "./pages/completedTasksPage";
import { Routes, Route, Link } from "react-router-dom";
import TrashPage from "./pages/Trashpage";
function App() {
  const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState("");
  const doneHabits = habits.filter((item) => item.isDone == true);
  const nonDoneHabits = habits.filter((item) => item.isDone == false);
  const [deletedHabits, setDeletedHabits] = useState([]);

  function clearDone() {
    setDeletedHabits([...deletedHabits, ...doneHabits]);

    setHabits(nonDoneHabits);
  }

  function handleDelete(id) {
    const habit = habits.find((key) => id == key.id);
    setDeletedHabits([...deletedHabits, habit]);
    setHabits(habits.filter((item) => item.id !== id));
  }

  return (
    <>
      <nav>
        <Link to="/">Habits</Link> <Link to="/completed"> Completed</Link>
        <Link to="/trash">Trash Page</Link>
      </nav>{" "}
      <Routes>
        <Route
          path="/"
          element={
            <HabitsDashboard
              habits={habits}
              setHabits={setHabits}
              clearDone={clearDone}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/completed"
          element={<CompletedTasks doneHabits={doneHabits} />}
        />
        <Route
          path="/trash"
          element={<TrashPage deletedHabits={deletedHabits}></TrashPage>}
        />
      </Routes>
    </>
  );
}

export default App;
