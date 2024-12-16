import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import EvaluationPDF from './EvaluationPDF';

const EvaluationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
`;

const AnatomyContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Side = styled.div`
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const MuscleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MuscleItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.selected ? '#e3f2fd' : 'white'};
`;

const ToneSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const ToneButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${props => props.selected ? '#4CAF50' : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
  cursor: pointer;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const Section = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ReflexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
`;

const ReflexItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ReflexButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const ReflexButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${props => props.selected ? '#4CAF50' : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
  cursor: pointer;
`;

const SensibilitySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 10px;
`;

const ArticularRangeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 15px;
`;

const ArticularRangeItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
`;

const RangeInputGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;

  input {
    width: 80px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  span {
    font-size: 0.9em;
    color: #666;
  }
`;

const PDFButton = styled.div`
  margin-top: 20px;
  
  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #2196F3;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #1976D2;
    }
  }
`;

const muscleGroups = {
  dog: {
    left: [
      { id: 'l1', name: 'M. Trapezius' },
      { id: 'l2', name: 'M. Latissimus dorsi' },
      { id: 'l3', name: 'M. Triceps brachii' },
      { id: 'l4', name: 'M. Quadriceps femoris' },
      { id: 'l5', name: 'M. Gastrocnemius' }
    ],
    right: [
      { id: 'r1', name: 'M. Trapezius' },
      { id: 'r2', name: 'M. Latissimus dorsi' },
      { id: 'r3', name: 'M. Triceps brachii' },
      { id: 'r4', name: 'M. Quadriceps femoris' },
      { id: 'r5', name: 'M. Gastrocnemius' }
    ]
  },
  cat: {
    left: [
        { id: 'l1', name: 'M. Trapezius' },
        { id: 'l2', name: 'M. Latissimus dorsi' },
        { id: 'l3', name: 'M. Triceps brachii' },
        { id: 'l4', name: 'M. Quadriceps femoris' },
        { id: 'l5', name: 'M. Gastrocnemius' }
      ],
      right: [
        { id: 'r1', name: 'M. Trapezius' },
        { id: 'r2', name: 'M. Latissimus dorsi' },
        { id: 'r3', name: 'M. Triceps brachii' },
        { id: 'r4', name: 'M. Quadriceps femoris' },
        { id: 'r5', name: 'M. Gastrocnemius' }
      ]
  }
};

const reflexes = [
  { id: 'celiaco', name: 'Celíaco' },
  { id: 'patelar', name: 'Patelar' },
  { id: 'gastrocnemio', name: 'Gastrocnemio' },
  { id: 'tibial', name: 'Tibial' },
  { id: 'panicular', name: 'Panicular' }
];

const sensibilityTypes = [
  { id: 'superficial', name: 'Superficial' },
  { id: 'profundo', name: 'Profunda' }
];

const articulations = [
  { id: 'tarso', name: 'Tarso', sides: ['izquierdo', 'derecho'] },
  { id: 'rodilla', name: 'Rodilla', sides: ['izquierdo', 'derecho'] },
  { id: 'cadera', name: 'Cadera', sides: ['izquierdo', 'derecho'] },
  { id: 'carpo', name: 'Carpo', sides: ['izquierdo', 'derecho'] },
  { id: 'codo', name: 'Codo', sides: ['izquierdo', 'derecho'] },
  { id: 'hombro', name: 'Hombro', sides: ['izquierdo', 'derecho'] }
];

const PhysioEvaluation = () => {
  const [patientData, setPatientData] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [evaluation, setEvaluation] = useState({});
  const [reflexEvaluation, setReflexEvaluation] = useState({});
  const [sensibility, setSensibility] = useState({
    superficial: '',
    profundo: ''
  });
  const [observations, setObservations] = useState('');
  const [workProtocol, setWorkProtocol] = useState('');
  const [articularRanges, setArticularRanges] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedPatient = localStorage.getItem('currentPatient');
    if (savedPatient) {
      setPatientData(JSON.parse(savedPatient));
    }
  }, []);

  const handleMuscleSelect = (muscleId) => {
    setSelectedMuscle(muscleId);
  };

  const handleToneSelect = (muscleId, tone) => {
    setEvaluation(prev => ({
      ...prev,
      [muscleId]: tone
    }));
  };

  const handleReflexSelect = (reflexId, value) => {
    setReflexEvaluation(prev => ({
      ...prev,
      [reflexId]: value
    }));
  };

  const handleSensibilityChange = (type, value) => {
    setSensibility(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleRangeChange = (articulationId, side, value) => {
    setArticularRanges(prev => ({
      ...prev,
      [`${articulationId}_${side}`]: value
    }));
  };

  const handleSave = () => {
    const evaluationData = {
      patient: patientData,
      muscleEvaluation: evaluation,
      articularRanges,
      reflexEvaluation,
      sensibility,
      observations,
      workProtocol,
      date: new Date().toISOString()
    };
    
    // Guardar la evaluación actual
    localStorage.setItem('evaluationResults', JSON.stringify(evaluationData));
    
    // Guardar en el historial
    const evaluationHistory = JSON.parse(localStorage.getItem('evaluationHistory') || '[]');
    evaluationHistory.push(evaluationData);
    localStorage.setItem('evaluationHistory', JSON.stringify(evaluationHistory));
    
    alert('Evaluación guardada correctamente');
  };

  if (!patientData) return <div>Cargando datos del paciente...</div>;

  const animalType = patientData.species === 'perro' ? 'dog' : 'cat';

  return (
    <EvaluationContainer>
      <Header>
        <h2>Evaluación Fisioterapéutica</h2>
        <p>Paciente: {patientData.patientName}</p>
        <p>Especie: {patientData.species}</p>
      </Header>
      <h2>EVALUACION MUSCULAR </h2>
      <AnatomyContainer>
        <Side>
        
          <h3>Lado Izquierdo</h3>
          <MuscleList>
            {muscleGroups[animalType].left.map(muscle => (
              <MuscleItem
                key={muscle.id}
                selected={selectedMuscle === muscle.id}
                onClick={() => handleMuscleSelect(muscle.id)}
              >
                {muscle.name}
                {selectedMuscle === muscle.id && (
                  <ToneSelector>
                    <ToneButton
                      selected={evaluation[muscle.id] === 'hipotono'}
                      onClick={() => handleToneSelect(muscle.id, 'hipotono')}
                    >
                      Hipotono
                    </ToneButton>
                    <ToneButton
                      selected={evaluation[muscle.id] === 'semitono'}
                      onClick={() => handleToneSelect(muscle.id, 'semitono')}
                    >
                      Semitono
                    </ToneButton>
                    <ToneButton
                      selected={evaluation[muscle.id] === 'hipertono'}
                      onClick={() => handleToneSelect(muscle.id, 'hipertono')}
                    >
                      Hipertono
                    </ToneButton>
                  </ToneSelector>
                )}
              </MuscleItem>
            ))}
          </MuscleList>
        </Side>

        <Side>
          <h3>Lado Derecho</h3>
          <MuscleList>
            {muscleGroups[animalType].right.map(muscle => (
              <MuscleItem
                key={muscle.id}
                selected={selectedMuscle === muscle.id}
                onClick={() => handleMuscleSelect(muscle.id)}
              >
                {muscle.name}
                {selectedMuscle === muscle.id && (
                  <ToneSelector>
                    <ToneButton
                      selected={evaluation[muscle.id] === 'hipotono'}
                      onClick={() => handleToneSelect(muscle.id, 'hipotono')}
                    >
                      Hipotono
                    </ToneButton>
                    <ToneButton
                      selected={evaluation[muscle.id] === 'semitono'}
                      onClick={() => handleToneSelect(muscle.id, 'semitono')}
                    >
                      Semitono
                    </ToneButton>
                    <ToneButton
                      selected={evaluation[muscle.id] === 'hipertono'}
                      onClick={() => handleToneSelect(muscle.id, 'hipertono')}
                    >
                      Hipertono
                    </ToneButton>
                  </ToneSelector>
                )}
              </MuscleItem>
            ))}
          </MuscleList>
        </Side>
      </AnatomyContainer>

      <Section>
        <h2>RANGO ARTICULAR</h2>
        <ArticularRangeGrid>
          {articulations.map(articulation => (
            <ArticularRangeItem key={articulation.id}>
              <h4>{articulation.name}</h4>
              {articulation.sides.map(side => (
                <RangeInputGroup key={`${articulation.id}_${side}`}>
                  <label>{side.charAt(0).toUpperCase() + side.slice(1)}:</label>
                  <input
                    type="number"
                    value={articularRanges[`${articulation.id}_${side}`] || ''}
                    onChange={(e) => handleRangeChange(articulation.id, side, e.target.value)}
                    placeholder="0"
                    min="0"
                    step="0.1"
                  />
                  <span>mm</span>
                </RangeInputGroup>
              ))}
            </ArticularRangeItem>
          ))}
        </ArticularRangeGrid>
      </Section>

      <Section>
        <h2>EVALUACIÓN DE REFLEJOS</h2>
        <ReflexGrid>
          {reflexes.map(reflex => (
            <ReflexItem key={reflex.id}>
              <h4>{reflex.name}</h4>
              <ReflexButtons>
                {['0', '+1', '+2'].map(value => (
                  <ReflexButton
                    key={value}
                    selected={reflexEvaluation[reflex.id] === value}
                    onClick={() => handleReflexSelect(reflex.id, value)}
                  >
                    {value}
                  </ReflexButton>
                ))}
              </ReflexButtons>
            </ReflexItem>
          ))}
        </ReflexGrid>
      </Section>

      <Section>
      <h2>EVALUACIÓN DE SENSIBILIDAD</h2>
        <SensibilitySection>
          {sensibilityTypes.map(type => (
            <div key={type.id}>
              <h4>{type.name}</h4>
              <TextArea
                value={sensibility[type.id]}
                onChange={(e) => handleSensibilityChange(type.id, e.target.value)}
                placeholder={`Describa la evaluación de sensibilidad ${type.name.toLowerCase()}...`}
              />
            </div>
          ))}
        </SensibilitySection>
      </Section>

      <Section>
      <h2>OBSERVACIONES:</h2>
        <TextArea
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          placeholder="Ingrese sus observaciones..."
        />
      </Section>

      <Section>
      <h2>CONCLUSION Y PROTOCOLO DE TRABAJO</h2>
        <TextArea
          value={workProtocol}
          onChange={(e) => setWorkProtocol(e.target.value)}
          placeholder="Describa el protocolo de trabajo recomendado..."
        />
      </Section>

      <SaveButton onClick={handleSave}>
        Guardar Evaluación Completa
      </SaveButton>

      <PDFButton>
        <PDFDownloadLink
          document={
            <EvaluationPDF
              data={{
                patient: patientData,
                muscleEvaluation: evaluation,
                articularRanges,
                reflexEvaluation,
                sensibility,
                observations,
                workProtocol,
                date: new Date().toISOString()
              }}
            />
          }
          fileName={`evaluacion_${patientData.patientName}_${new Date().toISOString().split('T')[0]}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Generando PDF...' : 'Descargar Informe PDF'
          }
        </PDFDownloadLink>
      </PDFButton>
    </EvaluationContainer>
  );
};

export default PhysioEvaluation; 