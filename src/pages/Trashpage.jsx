import Habit from "../components/habit";
function TrashPage({ deletedHabits }) {
  return (
    <>
      <ul>
        {deletedHabits.map((item) => (
          <li key={item.id}>
            <Habit habit={item}></Habit>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrashPage;
