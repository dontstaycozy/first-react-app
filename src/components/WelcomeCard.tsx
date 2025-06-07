import React from "react";
import "../App.css";

type WelcomeCardProps = {
  name: string;
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ name }) => {
  return (
    <div className="card">
      <h1>Welcome {name || "Friend"}!!</h1>
      <p>i have no idea what im doing</p>
    </div>
  );
};

export default WelcomeCard;