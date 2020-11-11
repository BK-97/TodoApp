import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
    return(
    <View style={styles.header}>
        <Text style={styles.title}>NOT DEFTERİM</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: '#0fdfd6'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})