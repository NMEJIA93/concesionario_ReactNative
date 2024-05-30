import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from '../styles/globalStyles'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TestDriveState from '../context/testDrive/testDriveState';

const TestCar = () => {
    const navigation = useNavigation();
    return (
        <TestDriveState>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <Text
                                style={styles.headerText}
                                variant="displayMedium">
                                RESERVA UNA PRUEBA DE MANEJO
                            </Text>
                        </View>

                        <View style={styles.promotionContainer}>
                            <Image source={require('../img/carro1.png')}
                                style={styles.ImageTestCar}
                                resizeMode="cover"
                            />
                            <Text style={styles.TextTitleContac}>
                                The Vegito
                            </Text>
                            <Text style={styles.TextDescriptionContac}>
                                Precio sujerido: $120.000.000
                            </Text>
                            <Button style={styles.buttons}
                                mode="contained" onPress={() => navigation.navigate('formTest')}>Pruebalo</Button>

                            <Image source={require('../img/carro2.png')}
                                style={styles.ImageTestCar}
                                resizeMode="cover"
                            />
                            <Text style={styles.TextTitleContac}>
                                Gogeta
                            </Text>
                            <Text style={styles.TextDescriptionContac}>
                                Precio sujerido: $150.000.000
                            </Text>
                            <TouchableOpacity style={styles.buttonReserve}>
                                <Text style={styles.buttonText}>Preubalo</Text>
                            </TouchableOpacity>
                            <Image source={require('../img/carro3.png')}
                                style={styles.ImageTestCar}
                                resizeMode="cover"
                            />
                            <Text style={styles.TextTitleContac}>
                                SS2
                            </Text>
                            <Text style={styles.TextDescriptionContac}>
                                Precio sujerido: $80.000.000
                            </Text>
                            <TouchableOpacity style={styles.buttonReserve}>
                                <Text style={styles.buttonText}>Preubalo</Text>
                            </TouchableOpacity>
                            <Image source={require('../img/carro4.png')}
                                style={styles.ImageTestCar}
                                resizeMode="cover"
                            />
                            <Text style={styles.TextTitleContac}>
                                SS3
                            </Text>
                            <Text style={styles.TextDescriptionContac}>
                                Precio sujerido: $100.000.000
                            </Text>
                            <TouchableOpacity style={styles.buttonReserve}>
                                <Text style={styles.buttonText}>Preubalo</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.TextDescriptionContac}>
                                ¡No esperes más para reservar tu prueba de manejo!
                                Selecciona tu modelo, elige tu concesionario Renault, indica tus datos de contacto, disponibilidad y hora preferida... Solicita tu prueba de manejo en línea con facilidad y prepara tus sentidos para una nueva experiencia con Renault. ¡Es tu turno!
                            </Text>
                        </View>
                    </View >
                </ScrollView>
            </SafeAreaView >
        </TestDriveState>

    )
}



export default TestCar
