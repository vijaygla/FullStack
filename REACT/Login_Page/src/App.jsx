import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar} from './Component/Navbar';
import {LoginForm} from './Component/LoginForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        {/* Add other routes here */}
      </Routes>
      <LoginForm></LoginForm>
    </Router>
  );
};

export default App;

