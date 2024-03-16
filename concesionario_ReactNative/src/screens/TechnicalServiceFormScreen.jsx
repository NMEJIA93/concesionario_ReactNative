import React, { useState } from 'react'
import { ScrollView, View, SafeAreaView, Pressable, Text, Modal } from 'react-native'
import {/*  Text, */ TextInput, Button, RadioButton, List, } from 'react-native-paper';

import DatePicker from 'react-native-date-picker'

import styles from '../styles/globalStyles'

const TechnicalServiceFormScreen = ({ modalTechnicalServiceForm, setModalTechnicalServiceForm }) => {
    const [fecha, setFecha] = useState(new Date())
    const [value, setValue] = React.useState('');



    return (
        <Modal
            animationType="slide"
            visible={modalTechnicalServiceForm}
        >
            <SafeAreaView style={styles.containerMain}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Nuevo Servicio</Text>
                    </View>

                    <View style={styles.container}>
                        <View >
                            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                <Text style={styles.label}>Tipo Servicio</Text>
                                <View style={styles.opcRadioButton}>

                                    <Text>Mantenimiento</Text>
                                    <RadioButton value="mantenimiento" />

                                    <Text>Reparacion</Text>
                                    <RadioButton value="reparacion" />

                                </View>
                                <View style={styles.opcRadioButton}>

                                    <Text>Revisión Tecnica</Text>
                                    <RadioButton value="revisionTecnica" />

                                </View>

                            </RadioButton.Group>
                        </View>

                        <View>
                            <Text style={styles.label}>Fecha</Text>
                            <DatePicker
                                date={fecha}
                                onDateChange={setFecha}
                                locale='es'
                            />
                        </View>
                        <View style={styles.campo}>
                            <Text style={styles.label}>Observaciones</Text>
                            <TextInput
                                style={[styles.input, styles.sintomasInput]}
                                placeholder='Aqui describe  las observaciones del servicio'
                                placeholderTextColor={'#666'}
                                multiline={true}
                                numberOfLines={4}
                            />
                        </View>






                    </View>
                    <View >
                            <Pressable
                                style={styles.btnSend}
                            >
                                <Text
                                    style={styles.btnText}
                                    variant="headlineMedium"
                                    onPress={() => console.log('aqui va a guardar')}
                                >
                                    Enviar
                                </Text>
                            </Pressable>

                            <Pressable
                                style={styles.btnCancel}
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
