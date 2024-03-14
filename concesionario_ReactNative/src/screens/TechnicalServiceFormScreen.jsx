import React, { useState } from 'react'
import { ScrollView, View, SafeAreaView, Pressable, Text, Modal } from 'react-native'
/* import { Modal } from 'react-native-paper' */
import DatePicker from 'react-native-date-picker'

import styles from '../styles/globalStyles'

const TechnicalServiceFormScreen = ({ modalTechnicalServiceForm, setModalTechnicalServiceForm }) => {
    const [fecha, setFecha] = useState(new Date())


    return (
        <Modal
            animationType="slide"
            visible={modalTechnicalServiceForm}
        >
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Solicitar Servicio</Text>
                    </View>

                    <View>

                        <View>
                            <Text>Fecha</Text>
                            <DatePicker
                                date={fecha}
                                onDateChange={setFecha}
                                locale='es'
                            />
                        </View>

                        <Pressable
                            style={styles.btnPrimary}
                        >
                            <Text
                                style={styles.btnText}
                                variant="headlineMedium"
                                onPress={() => { setModalTechnicalServiceForm(!setModalTechnicalServiceForm) }}
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

export default TechnicalServiceFormScreen
