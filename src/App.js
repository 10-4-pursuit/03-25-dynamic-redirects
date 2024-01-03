import UserProfile from './UserProfile.jsx'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import data from './data/users.json'
import Default from './Default.jsx';
import { List, ListItem, ListItemText, Typography } from '@mui/material';


function App() {
  return (
<div>
<Router>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {data.validUserIds.map((userId =>
      <ListItem key={userId} component={Link} to={`/profile/${userId}`}>
      <ListItemText primary={<Typography variant="h6">{userId}</Typography>} />
    </ListItem>
  ))}
</List>
<Routes>
  <Route path="/profile/:userId" element={<UserProfile />} />
  <Route path="/profile/default" element={<Default />} />
</Routes>
</Router>
</div>
);
}



export default App;

