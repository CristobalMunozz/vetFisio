import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Registrar fuentes (opcional, para mejor apariencia)
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
});

const styles = StyleSheet.create({
  page: {
    padding: 15,
    fontFamily: 'Roboto',
    fontSize: 8,
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 10,
  },
  headerTop: {
    borderBottom: '1 solid #2196F3',
    paddingBottom: 3,
    marginBottom: 5,
  },
  headerBottom: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#f8f9fa',
    padding: 5,
    borderRadius: 2,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 2,
    fontWeight: 'bold',
    color: '#1976D2'
  },
  subtitle: {
    fontSize: 8,
    marginBottom: 2,
    color: '#666'
  },
  section: {
    margin: 10,
    padding: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5
  },
  label: {
    width: 150,
    fontWeight: 'bold'
  },
  value: {
    flex: 1
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf'
  },
  tableCell: {
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: '#bfbfbf'
  },
  footer: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    textAlign: 'center',
    borderTop: '0.5 solid #2196F3',
    paddingTop: 3,
  },
  footerSignature: {
    fontSize: 8,
    marginBottom: 1,
  },
  footerTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  footerCredentials: {
    fontSize: 7,
    color: '#444',
    marginBottom: 1,
  },
  summaryBox: {
    margin: '3 0',
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#4CAF50',
  },
  summaryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: 4,
  },
  summaryRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  summaryLabel: {
    width: '40%',
    fontSize: 10,
    fontWeight: 'bold',
  },
  summaryValue: {
    width: '60%',
    fontSize: 10,
  },
  summarySection: {
    marginBottom: 8,
  },
  muscleStateBox: {
    margin: '3 0',
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#ff9800',
  },
  muscleStateGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  muscleStateColumn: {
    flex: 1,
    minWidth: '45%',
  },
  muscleStateTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: 5,
  },
  muscleGroup: {
    marginBottom: 15,
  },
  muscleGroupTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#e8e8e8',
    padding: 3,
    marginBottom: 5,
  },
  muscleRow: {
    marginBottom: 2,
    paddingVertical: 1,
  },
  muscleName: {
    width: '60%',
    fontSize: 9,
  },
  muscleState: {
    width: '35%',
    fontSize: 9,
    textAlign: 'right',
    backgroundColor: '#f5f5f5',
    padding: 2,
    borderRadius: 2,
  },
  stateIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  evaluationBox: {
    margin: '3 0',
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#9c27b0',
  },
  evaluationGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  evaluationColumn: {
    flex: 1,
    minWidth: '45%',
  },
  evaluationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: 5,
  },
  evaluationSubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#e8e8e8',
    padding: 3,
    marginBottom: 5,
  },
  patientDataBox: {
    margin: '5 0',
    padding: 8,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  patientDataTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: 5,
    marginBottom: 10,
  },
  patientDataGrid: {
    flexDirection: 'row',
    gap: 5,
  },
  patientDataColumn: {
    flex: 1,
  },
  patientDataRow: {
    flexDirection: 'row',
    marginBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  patientDataLabel: {
    width: '40%',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#444',
  },
  patientDataValue: {
    width: '60%',
    fontSize: 10,
  },
  observationsBox: {
    margin: '3 0',
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#607d8b',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: 3,
    marginBottom: 5,
    color: '#333',
  },
  patientDataItem: {
    flexDirection: 'row',
    marginBottom: 3,
    gap: 5,
  },
  patientLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#444',
    width: 60,
  },
  patientValue: {
    fontSize: 10,
    flex: 1,
  },
  patientColumn: {
    flex: 1,
  },
});

const generateSummary = (data) => {
  const {
    muscleEvaluation,
    articularRanges,
    reflexEvaluation,
    sensibility
  } = data;

  // Contar tonos musculares
  const muscleSummary = Object.values(muscleEvaluation).reduce((acc, tone) => {
    acc[tone] = (acc[tone] || 0) + 1;
    return acc;
  }, {});

  // Calcular promedios de rangos articulares
  const articulationAverages = {};
  Object.entries(articularRanges).forEach(([key, value]) => {
    const [joint] = key.split('_');
    if (!articulationAverages[joint]) {
      articulationAverages[joint] = { sum: 0, count: 0 };
    }
    articulationAverages[joint].sum += Number(value);
    articulationAverages[joint].count += 1;
  });

  // Contar reflejos
  const reflexSummary = Object.values(reflexEvaluation).reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  return {
    muscleSummary,
    articulationAverages,
    reflexSummary,
    sensibilitySummary: {
      superficial: sensibility.superficial ? 'Evaluado' : 'No evaluado',
      profundo: sensibility.profundo ? 'Evaluado' : 'No evaluado'
    }
  };
};

const EvaluationPDF = ({ data }) => {
  const {
    patient,
    muscleEvaluation,
    articularRanges,
    reflexEvaluation,
    sensibility,
    observations,
    workProtocol,
    date
  } = data;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES');
  };

  // Función para formatear el nombre del músculo
  const formatMuscleName = (muscleId) => {
    const side = muscleId.startsWith('l') ? 'Izquierdo' : 'Derecho';
    const muscles = {
      '1': 'M. Trapezius',
      '2': 'M. Latissimus dorsi',
      '3': 'M. Triceps brachii',
      '4': 'M. Quadriceps femoris',
      '5': 'M. Gastrocnemius'
    };
    const muscleNumber = muscleId.slice(-1);
    return `${muscles[muscleNumber]} (${side})`;
  };

  // Función para formatear el nombre de la articulación
  const formatArticulationName = (jointId) => {
    const [joint, side] = jointId.split('_');
    const joints = {
      'tarso': 'Tarso',
      'rodilla': 'Rodilla',
      'cadera': 'Cadera',
      'carpo': 'Carpo',
      'codo': 'Codo',
      'hombro': 'Hombro'
    };
    return `${joints[joint]} ${side.charAt(0).toUpperCase() + side.slice(1)}`;
  };

  // Función para formatear el nombre del reflejo
  const formatReflexName = (reflexId) => {
    const reflexes = {
      'celiaco': 'Celíaco',
      'patelar': 'Patelar',
      'gastrocnemio': 'Gastrocnemio',
      'tibial': 'Tibial',
      'panicular': 'Panicular'
    };
    return reflexes[reflexId];
  };

  const summary = generateSummary(data);

  // Función para organizar los músculos por lado y estado
  const organizeMuscles = () => {
    const leftMuscles = {};
    const rightMuscles = {};

    Object.entries(muscleEvaluation).forEach(([muscleId, state]) => {
      const side = muscleId.startsWith('l') ? leftMuscles : rightMuscles;
      const muscleName = formatMuscleName(muscleId);
      side[muscleId] = { name: muscleName, state };
    });

    return { leftMuscles, rightMuscles };
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>INFORME DE EVALUACIÓN FISIOTERAPÉUTICA</Text>
            <Text style={styles.subtitle}>Fecha: {formatDate(date)} | Emisión: {formatDate(new Date())}</Text>
          </View>
          
          <View style={styles.headerBottom}>
            <View style={styles.patientColumn}>
              <View style={styles.patientDataItem}>
                <Text style={styles.patientLabel}>Paciente:</Text>
                <Text style={styles.patientValue}>{patient.patientName}</Text>
              </View>
              <View style={styles.patientDataItem}>
                <Text style={styles.patientLabel}>Tutor:</Text>
                <Text style={styles.patientValue}>{patient.tutorName}</Text>
              </View>
              <View style={styles.patientDataItem}>
                <Text style={styles.patientLabel}>Especie:</Text>
                <Text style={styles.patientValue}>{patient.species}</Text>
              </View>
            </View>
            
            <View style={styles.patientColumn}>
              <View style={styles.patientDataItem}>
                <Text style={styles.patientLabel}>Raza:</Text>
                <Text style={styles.patientValue}>{patient.breed}</Text>
              </View>
              <View style={styles.patientDataItem}>
                <Text style={styles.patientLabel}>Edad:</Text>
                <Text style={styles.patientValue}>{patient.patientAge}</Text>
              </View>
              <View style={styles.patientDataItem}>
                <Text style={styles.patientLabel}>Médico:</Text>
                <Text style={styles.patientValue}>{patient.referringDoctor}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 5 }}>
          <View style={[styles.summaryBox, { flex: 1 }]}>
            <Text style={styles.summaryTitle}>RESUMEN DE EVALUACIÓN</Text>
            
            <View style={styles.summarySection}>
              <Text style={styles.subtitle}>Estado Muscular:</Text>
              {Object.entries(summary.muscleSummary).map(([tone, count]) => (
                <View style={styles.summaryRow} key={tone}>
                  <Text style={styles.summaryLabel}>{tone}:</Text>
                  <Text style={styles.summaryValue}>{count} músculos</Text>
                </View>
              ))}
            </View>

            <View style={styles.summarySection}>
              <Text style={styles.subtitle}>Promedio Rangos Articulares:</Text>
              {Object.entries(summary.articulationAverages).map(([joint, data]) => (
                <View style={styles.summaryRow} key={joint}>
                  <Text style={styles.summaryLabel}>{joint}:</Text>
                  <Text style={styles.summaryValue}>
                    {(data.sum / data.count).toFixed(1)} mm (promedio)
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.summarySection}>
              <Text style={styles.subtitle}>Reflejos:</Text>
              {Object.entries(summary.reflexSummary).map(([value, count]) => (
                <View style={styles.summaryRow} key={value}>
                  <Text style={styles.summaryLabel}>Nivel {value}:</Text>
                  <Text style={styles.summaryValue}>{count} reflejos</Text>
                </View>
              ))}
            </View>

            <View style={styles.summarySection}>
              <Text style={styles.subtitle}>Estado de Sensibilidad:</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Superficial:</Text>
                <Text style={styles.summaryValue}>{summary.sensibilitySummary.superficial}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Profunda:</Text>
                <Text style={styles.summaryValue}>{summary.sensibilitySummary.profundo}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.muscleStateBox, { flex: 1 }]}>
            <Text style={styles.muscleStateTitle}>ESTADO MUSCULAR DETALLADO</Text>
            <View style={styles.muscleStateGrid}>
              <View style={styles.muscleStateColumn}>
                <Text style={styles.muscleGroupTitle}>Lado Izquierdo</Text>
                {Object.entries(organizeMuscles().leftMuscles).map(([id, muscle]) => (
                  <View style={styles.muscleRow} key={id}>
                    <Text style={styles.muscleName}>
                      {muscle.name.replace(' (Izquierdo)', '')}
                    </Text>
                    <Text 
                      style={[
                        styles.muscleState,
                        { 
                          backgroundColor: muscle.state === 'hipotono' ? '#ffebee' : 
                                         muscle.state === 'hipertono' ? '#e8f5e9' : '#fff8e1',
                          color: muscle.state === 'hipotono' ? '#c62828' : 
                                muscle.state === 'hipertono' ? '#2e7d32' : '#f57f17'
                        }
                      ]}
                    >
                      {muscle.state}
                    </Text>
                  </View>
                ))}
              </View>
              
              <View style={styles.muscleStateColumn}>
                <Text style={styles.muscleGroupTitle}>Lado Derecho</Text>
                {Object.entries(organizeMuscles().rightMuscles).map(([id, muscle]) => (
                  <View style={styles.muscleRow} key={id}>
                    <Text style={styles.muscleName}>
                      {muscle.name.replace(' (Derecho)', '')}
                    </Text>
                    <Text 
                      style={[
                        styles.muscleState,
                        { 
                          backgroundColor: muscle.state === 'hipotono' ? '#ffebee' : 
                                         muscle.state === 'hipertono' ? '#e8f5e9' : '#fff8e1',
                          color: muscle.state === 'hipotono' ? '#c62828' : 
                                muscle.state === 'hipertono' ? '#2e7d32' : '#f57f17'
                        }
                      ]}
                    >
                      {muscle.state}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.stateIndicator, { backgroundColor: '#ff6b6b' }]} />
                <Text style={{ fontSize: 8 }}>Hipotono</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.stateIndicator, { backgroundColor: '#ffd93d' }]} />
                <Text style={{ fontSize: 8 }}>Semitono</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.stateIndicator, { backgroundColor: '#4CAF50' }]} />
                <Text style={{ fontSize: 8 }}>Hipertono</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.evaluationBox}>
          <Text style={styles.evaluationTitle}>EVALUACIÓN FISIOLÓGICA DETALLADA</Text>
          
          {Object.keys(articularRanges).length > 0 && (
            <View style={styles.summarySection}>
              <Text style={styles.evaluationSubtitle}>Rangos Articulares:</Text>
              <View style={styles.evaluationGrid}>
                <View style={styles.evaluationColumn}>
                  <Text style={styles.subtitle}>Lado Izquierdo</Text>
                  {Object.entries(articularRanges)
                    .filter(([key]) => key.includes('izquierdo'))
                    .map(([joint, range]) => (
                      <View style={styles.summaryRow} key={joint}>
                        <Text style={styles.summaryLabel}>{joint.split('_')[0]}:</Text>
                        <Text style={styles.summaryValue}>{range} mm</Text>
                      </View>
                    ))}
                </View>
                <View style={styles.evaluationColumn}>
                  <Text style={styles.subtitle}>Lado Derecho</Text>
                  {Object.entries(articularRanges)
                    .filter(([key]) => key.includes('derecho'))
                    .map(([joint, range]) => (
                      <View style={styles.summaryRow} key={joint}>
                        <Text style={styles.summaryLabel}>{joint.split('_')[0]}:</Text>
                        <Text style={styles.summaryValue}>{range} mm</Text>
                      </View>
                    ))}
                </View>
              </View>
            </View>
          )}

          {Object.keys(reflexEvaluation).length > 0 && (
            <View style={styles.summarySection}>
              <Text style={styles.evaluationSubtitle}>Evaluación de Reflejos:</Text>
              <View style={styles.evaluationGrid}>
                {Object.entries(reflexEvaluation).map(([reflex, value]) => (
                  <View style={styles.summaryRow} key={reflex}>
                    <Text style={styles.summaryLabel}>{formatReflexName(reflex)}:</Text>
                    <Text 
                      style={[
                        styles.summaryValue,
                        { 
                          color: value === '0' ? '#ff6b6b' : 
                                 value === '+2' ? '#4CAF50' : '#ffd93d'
                        }
                      ]}
                    >
                      Nivel {value}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {(sensibility.superficial || sensibility.profundo) && (
            <View style={styles.summarySection}>
              <Text style={styles.evaluationSubtitle}>Evaluación de Sensibilidad:</Text>
              <View style={styles.evaluationGrid}>
                {sensibility.superficial && (
                  <View style={styles.evaluationColumn}>
                    <Text style={styles.subtitle}>Sensibilidad Superficial:</Text>
                    <Text style={styles.value}>{sensibility.superficial}</Text>
                  </View>
                )}
                {sensibility.profundo && (
                  <View style={styles.evaluationColumn}>
                    <Text style={styles.subtitle}>Sensibilidad Profunda:</Text>
                    <Text style={styles.value}>{sensibility.profundo}</Text>
                  </View>
                )}
              </View>
            </View>
          )}
        </View>

        <View style={styles.observationsBox}>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            {observations && (
              <View style={{ flex: 1 }}>
                <Text style={styles.sectionTitle}>OBSERVACIONES</Text>
                <Text style={{ fontSize: 7 }}>{observations}</Text>
              </View>
            )}
            {workProtocol && (
              <View style={{ flex: 1 }}>
                <Text style={styles.sectionTitle}>CONCLUSIÓN Y PROTOCOLO</Text>
                <Text style={{ fontSize: 7 }}>{workProtocol}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.footer}>
          <Text>_______________________________</Text>
          <Text style={styles.footerTitle}>Dra. Erica Martínez Barros</Text>
          <Text style={styles.footerCredentials}>Médica Veterinaria</Text>
          <Text style={styles.footerCredentials}>RCMV 4818</Text>
          <Text style={styles.footerCredentials}>Diplomada en Kinesiología y Rehabilitación en pequeños animales</Text>
          <Text style={styles.footerCredentials}>Universidad de Chile</Text>
        </View>
      </Page>
    </Document>
  );
};

export default EvaluationPDF; 