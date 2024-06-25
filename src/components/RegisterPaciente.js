import React, { useState } from 'react';
import axios from 'axios';

const RegisterPaciente = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    direccion: '',
    telefono: ''
  });

  const { nombre, edad, direccion, telefono } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/pacientes', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="nombre" value={nombre} onChange={onChange} required />
      <input type="number" name="edad" value={edad} onChange={onChange} required />
      <input type="text" name="direccion" value={direccion} onChange={onChange} required />
      <input type="text" name="telefono" value={telefono} onChange={onChange} required />
      <button type="submit">Registrar Paciente</button>
    </form>
  );
};

export default RegisterPaciente;
