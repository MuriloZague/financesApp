import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useState, useEffect, useContext } from 'react';


export default function Actions() {
 return (
<ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

   <TouchableOpacity style={styles.actionButton} activeOpacity={0.6}>
        <View style={styles.areabutton}>
        <AntDesign name='addfolder' size={26} color={'black'}/>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.actionButton} activeOpacity={0.6}>
        <View style={styles.areabutton}>
        <AntDesign name='tagso' size={26} color={'black'}/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.actionButton} activeOpacity={0.6}>
        <View style={styles.areabutton}>
        <AntDesign name='creditcard' size={26} color={'black'}/>
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.actionButton} activeOpacity={0.6}>
        <View style={styles.areabutton}>
        <AntDesign name='barcode' size={26} color={'black'}/>
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.actionButton} activeOpacity={0.6}>
        <View style={styles.areabutton}>
        <AntDesign name='setting' size={26} color={'black'}/>
        </View>
        <Text style={styles.labelButton}>Conta</Text>
   </TouchableOpacity>

</ScrollView>
  );
}

const styles = StyleSheet.create ({
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
})