// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Table from "./table";
// import HomePage from "./home";
// import Counter from "./counter";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/table" element={<Table />} /> */}
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
