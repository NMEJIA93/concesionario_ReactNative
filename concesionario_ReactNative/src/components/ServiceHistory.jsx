import React from 'react'
import ServicesList from './ServicesList'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Modal } from 'react-native'

import styles from '../styles/globalStyles'
/* import { Modal } from 'react-native-paper' */

const ServiceHistory = ({ modalServiceHistory, setModalServiceHistory }) => {
    const services = [
        {
            id: 1,
            tipo: 'Mantenimiento',
            fecha: 'hoy ',
        } ,
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


            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View >
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Historial de Servicios</Text>
                        </View>


                        <ServicesList
                            services={services}
                        />

                        <Pressable
                            style={styles.btnCancel}
                        >
                            <Text
                                style={styles.btnText}
                                variant="headlineMedium"
                                onPress={() => { setModalServiceHistory(!modalServiceHistory) }}
                            >
                                Regresar
                            </Text>
                        </Pressable>
                    </View>

                </ScrollView>
            </SafeAreaView>


        </Modal>



    )
}
export default ServiceHistory
