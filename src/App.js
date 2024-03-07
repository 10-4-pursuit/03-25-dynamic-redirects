import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={'/profile/jedi-6yok'}>A</Link>
        <Link to={'/profile/sith-3dkx'}>B</Link>
        <Link to={'/profile/hobbit-pk9r'}>C</Link>
        <Link to={'/profile/sherlock-q6yj'}>D</Link>
        <Link to={'/profile/dsfvdgsfvb'}>E</Link>
        <Routes>
          <Route path='/profile/:userId' element={ <UserProfile/> }/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
