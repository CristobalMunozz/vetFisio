import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, select, textarea {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  textarea {
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    tutorName: '',
    patientName: '',
    patientAge: '',
    breed: '',
    sex: '',
    species: '',
    referringDoctor: '',
    diagnosis: '',
    surgeryDate: '',
    treatment: '',
    feeding: '',
    evaluationDate: new Date().toISOString().split('T')[0]
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('currentPatient', JSON.stringify(patientData));
    navigate('/evaluation');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Formulario de Ingreso Paciente</h2>
        
        <FormGroup>
          <label>Nombre del Tutor:</label>
          <input
            type="text"
            name="tutorName"
            value={patientData.tutorName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Nombre del Paciente:</label>
          <input
            type="text"
            name="patientName"
            value={patientData.patientName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Edad:</label>
          <input
            type="text"
            name="patientAge"
            value={patientData.patientAge}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Especie:</label>
          <select
            name="species"
            value={patientData.species}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Raza:</label>
          <input
            type="text"
            name="breed"
            value={patientData.breed}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Sexo:</label>
          <select
            name="sex"
            value={patientData.sex}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Médico que Deriva:</label>
          <input
            type="text"
            name="referringDoctor"
            value={patientData.referringDoctor}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Diagnóstico:</label>
          <textarea
            name="diagnosis"
            value={patientData.diagnosis}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Fecha de Cirugía:</label>
          <input
            type="date"
            name="surgeryDate"
            value={patientData.surgeryDate}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Tratamiento:</label>
          <textarea
            name="treatment"
            value={patientData.treatment}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Alimentación:</label>
          <textarea
            name="feeding"
            value={patientData.feeding}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Guardar y Continuar</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default PatientForm;