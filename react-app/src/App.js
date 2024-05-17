import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Admin from './Admin';
import User from './User1';

function App() {

    return (
    <Router>
      <div>
        
        <Link to="/admin">
          <button>Admin</button>
        </Link>
        <Link to="/user">
          <button>User</button>
        </Link>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
