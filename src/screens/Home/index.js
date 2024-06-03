import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Button, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import ModalPassword from "../../modal/entradas";
import ModalSaida from "../../modal/saídas";

export default function Home() {

  const [list, setList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSaidaModalVisible, setIsSaidaModalVisible] = useState(false);
  const [totalGastos, setTotalGastos] = useState(0);
  const [totalGanhos, setTotalGanhos] = useState(10);


  useEffect(() => {
    // Função para carregar os dados do AsyncStorage
    const loadData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('movements');
        if (jsonValue != null) {
          setList(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Não foi possivel carregar AsyncStorage', e);
      }
    };

    loadData();
  }, []);


  const handleAddMovement = async (label, value, date, type, entrada) => {
    const newList = [...list, { label, value, date, type, entrada }];
    setList(newList);

    try {
      const jsonValue = JSON.stringify(newList);
      await AsyncStorage.setItem('movements', jsonValue);
    } catch (e) {
      console.error('Não foi possivel salvar AsyncStorage', e);
    }

    setIsModalVisible(false);
  };


  const handleAddSaida = async (label, value, date, entrada) => {
    handleAddMovement(label, value, date, "saída", entrada); // Definindo o tipo como "saída"
    setIsSaidaModalVisible(false);
  };

  // Função para calcular a soma dos gastos
  const calcularTotalGastos = () => {
    let total1 = 0;
    list.forEach(item => {
      // Verifica se o tipo da movimentação é "saída" antes de somar o valor
      if (item.type === "saída") {
        total1 += parseFloat(item.value);
      }
    });
    setTotalGastos(total1);
  };

  const calcularTotalGanhos = () => {
    let total = 0;
    list.forEach(item => {
      // Verifica se o tipo da movimentação é "entrada" antes de somar o valor
      if (item.type === "1") {
        total += parseFloat(item.value);
      }
    });
    setTotalGanhos(total);
  };
  const handleDeleteMovement = async (index) => {
    const newList = [...list];
    newList.splice(index, 1); // Remove o item do índice especificado
    setList(newList);

    try {
      const jsonValue = JSON.stringify(newList);
      await AsyncStorage.setItem('movements', jsonValue);
    } catch (e) {
      console.error('Failed to save data to AsyncStorage', e);
    }
  };

  const handleDeleteAll = async (index) => {
    const newList = [...list];
    newList.splice(index); // Remove o item do índice especificado
    setList(newList);

    try {
      const jsonValue = JSON.stringify(newList);
      await AsyncStorage.setItem('movements', jsonValue);
    } catch (e) {
      console.error('Failed to save data to AsyncStorage', e);
    }
  };

  const openSaidaModal = () => {
    setIsSaidaModalVisible(true);
  };

  // Chamada da função de cálculo quando a lista de movimentações é alterada
  useEffect(() => {
    calcularTotalGastos();
    calcularTotalGanhos();
  }, [list]);

  return (

    <View style={styles.container}>
      <Header name="Murilo Zague" />

      <Balance saldo={(totalGanhos - totalGastos).toFixed(2)} gastos={totalGastos.toFixed(2)} />

      <View style={styles.actionContainer}>
        <Actions
          openModal={() => setIsModalVisible(true)}
          openSaidaModal={openSaidaModal}

        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Últimas Movimentações</Text>
        <TouchableOpacity onPress={handleDeleteAll}>
          <Text style={styles.clear}>Limpar Tudo</Text>
        </TouchableOpacity>
      </View>

      <FlatList style={styles.list}
        data={list}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <Movements data={item} onDelete={() => handleDeleteMovement(index)} />}
      />

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
      >
        <ModalPassword
          handleClose={() => setIsModalVisible(false)}
          handleAddMovement={(label, value, date, type) => handleAddMovement(label, value, date, type)}
        />
      </Modal>
      <Modal
        visible={isSaidaModalVisible}
        animationType="fade"
        transparent={true}
      >
        <ModalSaida
          handleClose={() => setIsSaidaModalVisible(false)}
          handleAddSaida={(label, value, date, type) => handleAddSaida(label, value, date, type)}
        />
      </Modal>

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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clear: {
    marginTop: 19,
    margin: 14,
    fontSize: 12,
  },
});
