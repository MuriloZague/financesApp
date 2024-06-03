import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default function ModalPassword({ handleClose, handleAddMovement }) {
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const type = '1'
  

  const handleSave = () => {
    if (!label || !value || !date){
      Alert.alert('Atenção', 'Preencha todos os campos!')
      return
    }
    handleAddMovement(label, value, date, type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Adicionar Entrada:</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setLabel}
          value={label}
          placeholder='Nome da Movimentação'
          placeholderTextColor={'#fff'}
        />
        <TextInput 
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder='Valor (R$)'
          placeholderTextColor={'#fff'}
        />
        <TextInput 
          style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder='25/04/2024'
          placeholderTextColor={'#fff'}
        />
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.buttonSave, styles.button]} onPress={handleSave}>
            <Text style={styles.buttonTextSave}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonBack, styles.button]} onPress={handleClose}>
            <Text style={styles.buttonTextBack}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#555',
    color: '#fff',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonSave: {
    backgroundColor: '#28a745',
  },
  buttonTextSave: {
    color: '#fff',
  },
  buttonBack: {
    backgroundColor: '#dc3545',
  },
  buttonTextBack: {
    color: '#fff',
  },
});
