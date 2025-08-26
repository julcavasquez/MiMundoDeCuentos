import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginPin = () => {
  const [pin, setPin] = useState('');

  const handlePress = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleSubmit = () => {
    if (pin === '1234') {
      Alert.alert('Acceso permitido', '¡Bienvenido!');
      // Aquí iría la navegación o carga de perfil
    } else {
      Alert.alert('PIN incorrecto', 'Intenta nuevamente');
      setPin('');
    }
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {[0, 1, 2, 3].map((i) => (
          <View
            key={i}
            style={[styles.dot, { backgroundColor: i < pin.length ? '#333' : '#ccc' }]}
          />
        ))}
      </View>
    );
  };

  const renderKey = (number) => (
    <TouchableOpacity key={number} style={styles.key} onPress={() => handlePress(number)}>
      <Text style={styles.keyText}>{number}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa tu PIN</Text>
      {renderDots()}

      <View style={styles.keyboard}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(renderKey)}
        <TouchableOpacity style={styles.key} onPress={handleDelete}>
          <Text style={styles.keyText}>←</Text>
        </TouchableOpacity>
        {renderKey(0)}
        <TouchableOpacity style={styles.key} onPress={handleSubmit}>
          <Text style={styles.keyText}>✓</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FAF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 12,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  keyboard: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  key: {
    width: 70,
    height: 70,
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 24,
    color: '#333',
  },
});

export default LoginPin;
