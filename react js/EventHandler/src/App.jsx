import "./App.css";
import { EventPropgation } from "./component/EventPropgation";
import { EventProps } from "./component/EventProps";
import "./component/EV.css";
import { State } from "./component/Hooks/State";
import { Practice } from "./component/Hooks/Practice";
import { LiftState } from "./component/LiftState";

const App = () => {

  const handleButtonClick = (event) => {
    console.log(event);
    
    alert("Hey I am onClick Event");
  }

  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
    alert(`Hey Welcome ${user} ji`);
  }

  return (
    <>
      {/* Event Handler */}
      <button onClick={handleButtonClick}>click me 1</button>
      <br />
      <br />
      <button onClick={() => handleButtonClick()}>click me 2</button>
      <br />
      <br />
      <button onClick={() => alert("Hey I am inline evnet function")}>In line Arrow function</button>
      <br />
      <br />
      <button onClick={() => handleWelcomeUser("Vijay")}>click sir</button>


      {/* Event Props */}
      <EventProps />
      <EventPropgation />
      <State />
      <Practice />
      <LiftState />
    </>
  )
}

export default App;
