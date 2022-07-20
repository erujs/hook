import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PeopleProvider } from './contexts/people.context';
import Error from './pages/error/error.view';
import People from './pages/people/people.view';

const App = () => {
  return (
    <div className="App">
      <PeopleProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={() => <Navigate to="/home/Jerus" />} /> */}
            <Route path="/" element={<Navigate replace to="/home/Jerus" />} />
            <Route path="/home/:uid" element={<People />} />
            {/* <Route path="/profile/:uid" element={<People />} /> */}
            <Route path='*' element={<Error errorcode={"[404] Page Not Found!"} />} />
          </Routes>
        </Router>
      </PeopleProvider>
    </div>
  );
}

export default App;