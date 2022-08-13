import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Home from './Pages/Home';
import Sign from './Pages/Sign';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="brand">
          <NavLink to="/">
            Cuanin<span>Aja</span>.ID
          </NavLink>
        </div>
        <ul>
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/dashboard">
            Dashboard
          </NavLink>
        </ul>
        <div className="button-wrapper">
          <NavLink to="/sign/signin">
            <button className="border-gradient signin__button">Sign In</button>
          </NavLink>
          <NavLink to="/sign/signup">
            <button className="border-gradient signup__button" data="Sign Up"></button>
          </NavLink>
        </div>
      </nav>
      <section style={{ padding: '0 2.5rem 0 2.5rem', width: '100%', height: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />}>
            <Route path="/sign/signin" element={<Signin />} />
            <Route path="/sign/signup" element={<Signup />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
