type WelcomeCardProps = {
  name: string;
};

function WelcomeCard({ name }: WelcomeCardProps) {
  return (
    <div className="welcome-card">
      <h1>Welcome, {name}!</h1>
      <p>We’re glad to have you here! uhhh idk what im doing so please bear with me T-T.</p>
    </div>
  );
}

export default WelcomeCard;
