import React from "react";
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


const list = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '105,52',
        date: '02/05/2024',
        type: 0 //despesas // saídas
    },
    {
        id: 2,
        label: 'Transferência para Pedro',
        value: '90,00',
        date: '03/05/2024',
        type: 0 //despesas // saídas
    },
    {
        id: 3,
        label: 'Transferência de Pedro',
        value: '20,00',
        date: '01/05/2024',
        type: 1 //receita // entradas
    },
    {
        id: 4,
        label: 'Aluguel',
        value: '216,78',
        date: '30/04/2024',
        type: 0 //despesas // saídas
    },
]

export default function Home() {
  return (

    <View style={styles.container}>
      <Header name="Murilo Zague"/>  
      
      <Balance saldo='9.632,00' gastos='-392,30'/>

    <View style={styles.actionContainer}>
        <Actions/>
    </View>

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item} /> }
        />
        
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededea',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
