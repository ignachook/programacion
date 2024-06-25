import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import RegisterPaciente from './components/RegisterPaciente';
import RegisterTurno from './components/RegisterTurno';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-paciente" element={<RegisterPaciente />} />
          <Route path="/register-turno" element={<RegisterTurno />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
