import React, { useState } from "react";
import WelcomeCard from "./components/WelcomeCard";
import Counter from "./components/Counter";
import StudentInfo from "./components/StudentInfo";
import "./App.css";

type Student = {
  name: string;
  course: string;
  age: number;
};

function App() {
  const [student, setStudent] = useState<Student | null>(null);

  return (
    <div className="app">
      <WelcomeCard student={student} />
      <StudentInfo onSubmit={setStudent} />
      <Counter />
    </div>
  );
}

export default App;
