import { useState } from "react";
import HabitsDashboard from "./pages/habitsdashboard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <HabitsDashboard></HabitsDashboard>
    </>
  );
}

export default App;
