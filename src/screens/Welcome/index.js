import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

    const navigation = useNavigation();

 return (
   <View style={styles.container}>

    <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
        source={require('../../assets/ZFlogo.png')}
        style={{width: '100%'}}
        resizeMode='contain'
        />
    </View>

    <Animatable.View style={styles.containerForm} delay={600} animation="fadeInUp">
        <Text style={styles.tittle}>Monitore e organize seus gastos de qualquer lugar</Text>
        <Text style={styles.text}>Faça o login para começar!</Text>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Login')} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
    </Animatable.View>

   </View> 
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8000ff",
    },
    containerLogo: {
        flex: 2,
        backgroundColor: "#8000ff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#ededea',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});