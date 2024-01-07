import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:userId" element={<UserProfile/>}></Route>
        <Route path="/" element={<div>Home</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
