import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Component/Navbar';
import { LoginForm } from './Component/LoginForm';
import "./App.Module.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <LoginForm></LoginForm>
    </Router>
  );
};

export default App;
