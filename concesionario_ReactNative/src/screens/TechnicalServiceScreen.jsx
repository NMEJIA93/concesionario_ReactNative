import React, { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native'
import { Text, TextInput, Button, RadioButton, List, Modal } from 'react-native-paper';

import styles from '../styles/globalStyles'
import ServiceHistory from '../components/ServiceHistory';
import TechnicalServiceFormScreen from './TechnicalServiceFormScreen';

const TechnicalServiceScreen = () => {
    const [modalServiceHistory, setModalServiceHistory] = useState(false)
    const [modalTechnicalServiceForm, setModalTechnicalServiceForm] = useState(false)

    return (
        //<SafeAreaView>
        //   <ScrollView>
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text
                    style={styles.headerText}
                    variant="displayMedium">
                    Servicio Tecnico
                </Text>
            </View>

            <View style={styles.bodyTecnicalServiceScreen}>

                <Pressable
                    style={styles.btnPrimary}
                >
                    <Text
                        style={styles.btnText}
                        variant="headlineSmall"
                        onPress={() => { setModalTechnicalServiceForm(!modalTechnicalServiceForm) }}
                    >
                        Solicitud Taller
                    </Text>
                </Pressable>


                <Pressable
                    style={styles.btnPrimary}
                >
                    <Text
                        style={styles.btnText}
                        variant="headlineMedium"
                        onPress={() => { setModalServiceHistory(!modalServiceHistory) }}
                    >
                        Historial Servicios
                    </Text>
                </Pressable>
            </View>

            {modalServiceHistory && (
                <ServiceHistory
                    modalServiceHistory={modalServiceHistory}
                    setModalServiceHistory={setModalServiceHistory}
                />
            )}

            {modalTechnicalServiceForm && (
                <TechnicalServiceFormScreen
                    modalTechnicalServiceForm={modalTechnicalServiceForm}
                    setModalTechnicalServiceForm={setModalTechnicalServiceForm}
                />
            )}
        </View>
        // </ScrollView>
        //</SafeAreaView>
    )
}

export default TechnicalServiceScreen
