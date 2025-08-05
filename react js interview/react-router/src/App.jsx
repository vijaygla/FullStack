import { Routes, Route, Link, NavLink} from 'react-router';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import {Help} from './components/pages/Help';


function App() {

    return (
        <>
            <Link to="/">Home Page</Link><br />
            <Link to="/about">About Page</Link><br />
            <a href="/about">about page using anchor tag</a><br />
            <Link to="/contact">Contact Page using Link</Link><br />
            <NavLink to="/contact">Contact page using NavLink</NavLink>

            <nav>
                <Link to="/help">Help page using nav and Link</Link><br />
                <NavLink to="/help">Help page using nav and navLink</NavLink><br />
                <a href="/help">Help page using anchor tag</a>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/help' element={<Help />} />
            </Routes>
        </>
    )
}

export default App
