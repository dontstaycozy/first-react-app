import WelcomeCard from "./components/WelcomeCard";
import Counter from "./components/Counter";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <div className="App">
      <WelcomeCard name="random user" />
      <Counter />
      <StudentInfo />
    </div>
  );
}

export default App;
