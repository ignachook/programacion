import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      const res = await axios.get('/api/pacientes');
      setPacientes(res.data);
    };
    fetchPacientes();
  }, []);

  return (
    <div>
      <h1>Lista de Pacientes</h1>
      <ul>
        {pacientes.map(paciente => (
          <li key={paciente._id}>{paciente.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pacientes;
