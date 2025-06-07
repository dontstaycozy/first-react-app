import { useState } from "react";

function StudentInfo() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Student: ${name}, Course: ${course}`);
  };

  return (
    <form onSubmit={handleSubmit} className="student-info-form">
      <h2>enter a name if u want a shout out lmao</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentInfo;
