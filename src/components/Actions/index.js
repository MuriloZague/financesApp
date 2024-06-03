import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons';

export default function Actions({ openModal, openSaidaModal }) {

  const workInProgess = () => {
    ToastAndroid.show('Em desenvolvimento...', ToastAndroid.SHORT)
  }

  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.6} onPress={openModal}>
        <View style={styles.areabutton}>
          <FontAwesome6 name="folder-plus" size={24} color="black" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} activeOpacity={0.6} onPress={openSaidaModal}>
        <View style={styles.areabutton}>
          <FontAwesome6 name="folder-minus" size={24} color="black" />
        </View>
        <Text style={styles.labelButton}>Saídas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} activeOpacity={0.6} onPress={workInProgess}>
        <View style={styles.areabutton}>
          <AntDesign name='creditcard' size={26} color={'black'} />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.6} onPress={workInProgess}>
        <View style={styles.areabutton}>
          <AntDesign name='barcode' size={26} color={'black'} />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} activeOpacity={0.6} onPress={workInProgess}>
        <View style={styles.areabutton}>
          <AntDesign name='setting' size={26} color={'black'} />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 28,
  },
  areabutton: {
    backgroundColor: 'rgb(207, 207, 207)',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '400',
  },
});
