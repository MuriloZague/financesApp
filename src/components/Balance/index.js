import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Balance( {saldo, gastos} ) {

    const [showValue, setShowValue] = useState(true);

 return (
   <View style={styles.container}>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>

            <TouchableOpacity onPress={() => setShowValue(!showValue)}>
            {showValue ? (
                <Text style={styles.balance}><Text style={styles.currencySymbol}>R$</Text> {saldo}</Text>
            ) : (
                <View style={styles.skeleton}>

                </View>
            )}
            </TouchableOpacity>

        </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>

        <TouchableOpacity onPress={() => setShowValue(!showValue)}>
            {showValue ? (
                <Text style={styles.expenses}><Text style={styles.currencySymbol}>R$</Text> {gastos}</Text>
            ) : (
                <View style={styles.skeleton}>

                </View>
            )}
            </TouchableOpacity>
        </View>
        </View>
        
   </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "#FFF",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99, // sobrepor todas as camadas da interface 💀
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: 'rgb(180, 180, 180)'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        fontSize: 14,
        color: 'rgb(207, 207, 207)',
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71',
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c',
    },
    skeleton: {
        marginTop: 10,
        width: 80,
        height: 10,
        backgroundColor: '#DADADa',
        borderRadius: 8,
    }
})