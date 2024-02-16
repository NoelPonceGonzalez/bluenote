import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Views imports
import Login from './view/auth/login';
import Register from './view/auth/register';
import Home from './view/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;