// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';
import UseMemo from './UseMemo';
import ChatGpt from './ChatGpt';
import Contact from './Contact';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/chatgpt" element={<ChatGpt />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
        </Routes>
    );
};

export default AppRoutes;
