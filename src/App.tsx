import React, { useState } from "react";
import WelcomeCard from "./components/WelcomeCard";
import Counter from "./components/Counter";
import StudentInfo from "./components/StudentInfo";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="app">
      <WelcomeCard name={username} />
      <StudentInfo onSubmit={setUsername} />
      <Counter />
    </div>
  );
}

export default App;