import React, { useState } from "react";
import "../App.css";

type StudentInfoProps = {
  onSubmit: (student: { name: string; course: string; age: number }) => void;
};

const StudentInfo: React.FC<StudentInfoProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, course, age: Number(age) });
    setName("");
    setCourse("");
    setAge("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="studentName">Name:</label>
        <input
          id="studentName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="studentCourse">Course:</label>
        <input
          id="studentCourse"
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <label htmlFor="studentAge">Age:</label>
        <input
          id="studentAge"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentInfo;
