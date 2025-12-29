import { useState } from "react";

export default function HabitBuilder() {
  const [habits, setHabits] = useState([
    { name: "sample", streak: 0, lastCompleted: null },
  ]);

  const [newHabit, setNewHabit] = useState("");

  function addNewTask() {

    //agar input empty ho to
    if (newHabit.trim() === "") return;

    setHabits([
      ...habits,
      { name: newHabit, streak: 0, lastCompleted: null },
    ]);

    setNewHabit("");
  }

  function completeHabit(index) {
    const today = new Date().toDateString();

    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        if (habit.lastCompleted === today) return habit;

        return {
          ...habit,
          streak: habit.streak + 1,
          lastCompleted: today,
        };
      }
      return habit;
    });

    setHabits(updatedHabits);
  }

  function deleteHabit(index) {
    setHabits(habits.filter((habit, i) => i !== index));
  }

  return (
    <div
      style={{
        backgroundColor: "#111",
        borderRadius: "12px",
        padding: "20px",
        color: "#fff",
        Width: "400px",
        margin: "30px auto"
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
        Habit Builder
      </h3>

      <input
        type="text"
        placeholder="Enter your habit"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          borderRadius: "6px",
          border: "none",
          outline: "none",
          marginBottom: "10px",
          paddingLeft: "8px",
        }}
      />

      <button
        onClick={addNewTask}
        style={{
          width: "90%",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Add Habit
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {habits.map((habit, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#222",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <strong>{habit.name}</strong>
            <br />
            Streak: {habit.streak}
            <br />
            Last Completed: {habit.lastCompleted || "Not complete"}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <button
                onClick={() => completeHabit(index)}
                style={{
                  flex: 2,
                  marginRight: "5px",
                  padding: "8px",
                  backgroundColor: "blueviolet",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Complete
              </button>

              <button
                onClick={() => deleteHabit(index)}
                style={{
                  flex: 1,
                  marginLeft: "5px",
                  padding: "8px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
