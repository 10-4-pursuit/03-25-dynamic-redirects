import logo from './logo.svg';
import './App.css';
import usersData from './data/users.json'
import { BrowserRouter as router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserProfile from './components/UserProfile';
import Home from './components/Home';

function App() {
  const [users, setUsers] = useState(usersData.validUserIds);
  return (
    <div className="App">
      <router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<UserProfile users={users} />} />
        </Routes>
      </router>
    </div>
  );
}

export default App;
