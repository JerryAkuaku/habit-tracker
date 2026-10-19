function CompletedTasks({ doneHabits = [] }) {
  return (
    <div>
      <ul>
        {doneHabits.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
