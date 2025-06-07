import React from "react";
import "../App.css";

type WelcomeCardProps = {
  student: {
    name: string;
    course: string;
    age: number;
  } | null;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ student }) => {
  if (!student) {
    return (
      <div className="card">
        <h1>Welcome, Friend!!</h1>
        <p>Fill out the form below to get started.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h1>Welcome, {student.name}!</h1>
      <p>Course: {student.course}</p>
      <p>Age: {student.age}</p>
    </div>
  );
};

export default WelcomeCard;
