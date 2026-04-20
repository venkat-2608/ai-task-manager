import { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Task Manager</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <p>Current Task: {task}</p>
    </div>
  );
}

export default App;