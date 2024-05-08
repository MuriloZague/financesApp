import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Login() {

  const navigation = useNavigation();

 return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo(a)!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput
          placeholder='Digite seu e-mail'
          style={styles.input}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={ () => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} activeOpacity={0.5}>
            <Text style={styles.registerButtonText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
      flex:1,
      backgroundColor: '#8000ff',
    },
    containerHeader: {
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
    },
    message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white'
    },
    containerForm: {
      backgroundColor: "#ededea",
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    title: {
      fontSize: 20,
      marginTop: 28,
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
    },
    button: {
      backgroundColor: '#8000ff',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 10,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
    },
    buttonRegister: {
      marginTop: 14,
      alignSelf: 'center',
    },
    registerButtonText: {
      color: '#a1a1a1'
    }
});