import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterTurno = () => {
  const [formData, setFormData] = useState({
    paciente: '',
    fecha: '',
    motivo: ''
  });

  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      const res = await axios.get('/api/pacientes');
      setPacientes(res.data);
    };

    fetchPacientes();
  }, []);

  const { paciente, fecha, motivo } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/turnos', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <select name="paciente" value={paciente} onChange={onChange} required>
        <option value="">Seleccione un paciente</option>
        {pacientes.map(p => (
          <option key={p._id} value={p._id}>{p.nombre}</option>
        ))}
      </select>
      <input type="datetime-local" name="fecha" value={fecha} onChange={onChange} required />
      <input type="text" name="motivo" value={motivo} onChange={onChange} required />
      <button type="submit">Registrar Turno</button>
    </form>
  );
};

export default RegisterTurno;
