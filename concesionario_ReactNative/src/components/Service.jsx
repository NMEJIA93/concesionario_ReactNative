import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Service = ({ id , tipo, fecha }) => {

    return (
        <View style={styles.contenedor}>
            <View style={styles.containerDatos}>
                <Text style={styles.label}>ID: </Text>
                <Text style={styles.value}>{id} </Text>
            </View>
            <View style={styles.containerDatos}>
                <Text style={styles.label}>Tipo: </Text>
                <Text style={styles.value}>{tipo} </Text>
            </View>
            <View style={styles.containerDatos}>
                <Text style={styles.label}>Fecha: </Text>
                <Text style={styles.value}>{fecha} </Text>
            </View>

            <View>
                <Pressable></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomColor: '#94A3B8',
        borderBottomWidth: 2,
    },
    title: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10,
        textAlign:'center'
    },
    containerDatos: {
        flexDirection: 'row',
    },
    label:{
        color: '#08112e',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    value:{
        color: '#1013bb',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    }
})

export default Service
