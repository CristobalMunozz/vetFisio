import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  
  &:hover {
    background-color: #45a049;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Fisioterapia Veterinaria</h1>
      <Button to="/new-patient">Nuevo Paciente</Button>
    </HomeContainer>
  );
};

export default Home; 