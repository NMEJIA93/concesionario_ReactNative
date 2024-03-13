import React from 'react'
import ServicesList from './ServicesList'
import { StyleSheet, Text, View, SafeAreaView, ScrollView,Pressable } from 'react-native'

import styles from '../styles/globalStyles'
import { Modal } from 'react-native-paper'

const ServiceHistory = ({ modalServiceHistory, setModalServiceHistory }) => {
    const services = [
        {
            id: 1,
            tipo: 'Mantenimiento',
            fecha: 'hoy ',
        },
        {
            id: 2,
            tipo: 'Reparacion',
            fecha: 'mañana ',
        },
        {
            id: 4,
            tipo: 'Revision Tecnica',
            fecha: 'ayer ',
        },
        {
            id: 5,
            tipo: 'Mantenimiento',
            fecha: 'hoy ',
        },
        {
            id: 6,
            tipo: 'Reparacion',
            fecha: 'mañana ',
        },
        {
            id: 7,
            tipo: 'Revision Tecnica',
            fecha: 'ayer ',
        }
    ]

    return (
        <Modal
            animationType="slide"
            visible={modalServiceHistory}
        >


            <SafeAreaView >
                <ScrollView>
                    <View >
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Historial de Servicios</Text>
                        </View>

                        <ServicesList
                            services={services}
                        />


                    </View>
                    <Pressable
                    >
                        <Text
                            style={styles.btnText}
                            variant="headlineMedium"
                            onPress={() => { setModalServiceHistory(!modalServiceHistory) }}
                        >
                            Regresar
                        </Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>


        </Modal>



    )
}

/* const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2703f5',
        paddingVertical: 10,
        borderRadius: 10,
        alignContent: 'center',
        margin: 10

    },
    texto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },
    containerServiceHistory:{
        backgroundColor:  '#5881f3',
        flex: 1
    }
}) */

export default ServiceHistory
