import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import styles from "./App.module.css";
import Display from "./Component/Display";
import ButtonContainer from "./Component/ButtonContainer";

function App() {

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <div className={styles.buttonContainer}>
        <ButtonContainer></ButtonContainer>
      </div>
    </div>
    )
}

export default App
