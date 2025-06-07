import React, { useState } from "react";
import "../App.css";

type StudentInfoProps = {
  onSubmit: (name: string) => void;
};

const StudentInfo: React.FC<StudentInfoProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    setName("");
  };

  return (
    <div>
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="studentName">Enter your name:</label>
      <input
        id="studentName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default StudentInfo;