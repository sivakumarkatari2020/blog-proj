import React from 'react';
import {Routes , Route ,Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate replace to="/home" />}></Route>
        <Route path="/home/*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;