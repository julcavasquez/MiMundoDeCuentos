import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

function Stepper({ currentStep = 1, steps = [] }) {
  return (
    <View style={stepStyles.container}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <View key={index} style={stepStyles.stepContainer}>
            <View style={[
              stepStyles.circle,
              isActive ? stepStyles.circleActive :
              isCompleted ? stepStyles.circleCompleted :
              stepStyles.circleInactive
            ]}>
              <Text style={stepStyles.circleText}>{stepNumber}</Text>
            </View>
            <Text style={[
              stepStyles.label,
              isActive && stepStyles.labelActive
            ]}>
              {step.label}
            </Text>
            {index < steps.length - 1 && (
              <View style={[
                stepStyles.line,
                isCompleted ? stepStyles.lineCompleted : stepStyles.lineInactive
              ]} />
            )}
          </View>
        );
      })}
    </View>
  );
}

export default function FormularioCuentoIA() {
  const [step, setStep] = useState(1);
  const [cuento, setCuento] = useState({
    titulo: '',
    descripcion: '',
    escenas: []
  });

  const [escenaActual, setEscenaActual] = useState({
    titulo: '',
    descripcion: '',
    personajes: ''
  });

  const [preview, setPreview] = useState(false);

  const agregarEscena = () => {
    if (escenaActual.titulo && escenaActual.descripcion) {
      setCuento(prev => ({
        ...prev,
        escenas: [...prev.escenas, escenaActual]
      }));
      setEscenaActual({ titulo: '', descripcion: '', personajes: '' });
    } else {
      Alert.alert('⚠️ Escena incompleta', 'Completa el título y la descripción.');
    }
  };

  const guardarCuento = () => {
    if (!cuento.titulo || !cuento.descripcion || cuento.escenas.length === 0) {
      Alert.alert('❌ Campos incompletos', 'Agrega al menos una escena.');
      return;
    }
    console.log('📦 Cuento guardado:', cuento);
    Alert.alert('✅ ¡Cuento guardado!', 'Puedes verlo en la previsualización.');
    setPreview(true);
  };

  const pasos = [
    { label: '' },
    { label: '' },
    { label: '' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stepper currentStep={step} steps={pasos} />

      {step === 1 && (
        <>
          <Text style={styles.titulo}>Datos del Cuento </Text>

          <Text style={styles.label}>Título del cuento:</Text>
          <TextInput
            style={styles.input}
            value={cuento.titulo}
            onChangeText={(text) => setCuento(prev => ({ ...prev, titulo: text }))}
            placeholder="Ej: La isla mágica"
          />

          <Text style={styles.label}>Descripción del cuento:</Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            maxLength={300}
            value={cuento.descripcion}
            onChangeText={(text) => setCuento(prev => ({ ...prev, descripcion: text }))}
            placeholder="Una breve sinopsis..."
          />

          <Button title="Siguiente ➡️" onPress={() => setStep(2)} />
        </>
      )}

      {step === 2 && (
        <>
          <Text style={styles.subtitulo}>➕ Agregar Escena</Text>

          <TextInput
            style={styles.input}
            placeholder="Título de la escena"
            value={escenaActual.titulo}
            onChangeText={(text) => setEscenaActual(prev => ({ ...prev, titulo: text }))}
          />

          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={3}
            placeholder="Descripción de la escena"
            value={escenaActual.descripcion}
            onChangeText={(text) => setEscenaActual(prev => ({ ...prev, descripcion: text }))}
          />

          <TextInput
            style={styles.input}
            placeholder="Personajes (separados por coma)"
            value={escenaActual.personajes}
            onChangeText={(text) => setEscenaActual(prev => ({ ...prev, personajes: text }))}
          />

          <Button title="Agregar Escena" onPress={agregarEscena} />
          <View style={{ marginVertical: 10 }} />
          <Button title="⬅️ Anterior" onPress={() => setStep(1)} />
          <Button title="Siguiente ➡️" onPress={() => setStep(3)} />
        </>
      )}

      {step === 3 && preview && (
        <>
          <Text style={styles.subtitulo}>🔍 Previsualización del Cuento</Text>
          <Text style={styles.previewTitulo}>{cuento.titulo}</Text>
          <Text style={styles.previewDesc}>{cuento.descripcion}</Text>
          {cuento.escenas.map((escena, index) => (
            <View key={index} style={styles.escenaCard}>
              <Text style={styles.escenaTitulo}>🌈 {escena.titulo}</Text>
              <Text>{escena.descripcion}</Text>
              <Text style={{ fontStyle: 'italic' }}>🎭 {escena.personajes}</Text>
            </View>
          ))}
          <Button title="⬅️ Anterior" onPress={() => setStep(2)} />
        </>
      )}

      {step === 3 && !preview && (
        <>
          <Button title="⬅️ Anterior" onPress={() => setStep(2)} />
          <Button title="✅ Guardar Cuento" color="green" onPress={guardarCuento} />
        </>
      )}
    </ScrollView>
  );
}

const stepStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    flexWrap: 'wrap'
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold'
  },
  circleActive: {
    backgroundColor: '#00cddc'
  },
  circleCompleted: {
    backgroundColor: '#a7e9f3'
  },
  circleInactive: {
    backgroundColor: '#ddd'
  },
  label: {
    fontSize: 12,
    color: '#999',
  },
  labelActive: {
    color: '#00cddc',
    fontWeight: '600'
  },
  line: {
    height: 2,
    width: 50,
    backgroundColor: '#ccc',
    marginHorizontal: 10
  },
  lineCompleted: {
    backgroundColor: '#00cddc'
  },
  lineInactive: {
    backgroundColor: '#ccc'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    padding: 20,
    backgroundColor: '#E0F2FF'
  },
  titulo: {    
    fontFamily: 'Baloo2-Bold', 
    fontSize: 25, 
    color: '#1E3A8A',
    marginTop:20,
    marginBottom: 20,
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#c71585'
  },
  label: {
    fontSize: 20,
    fontFamily: 'Baloo2-Bold', 
    color: '#ff69b4',
    marginBottom: 10,
    textShadowColor: '#ffc0cb',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  input: {
    backgroundColor: '#f0f8ff',
    borderColor: '#60A5FA',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    shadowColor: '#00bcd4',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ffb6c1',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    marginBottom: 10
  },
  previewTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d81b60',
    marginBottom: 5
  },
  previewDesc: {
    fontSize: 16,
    marginBottom: 15
  },
  escenaCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f48fb1'
  },
  escenaTitulo: {
    fontWeight: 'bold',
    marginBottom: 3
  }
});
