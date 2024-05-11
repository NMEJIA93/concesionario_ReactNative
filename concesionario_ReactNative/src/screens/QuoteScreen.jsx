import React, { useState, useContext } from 'react'
import { View, SafeAreaView, ScrollView, Pressable } from 'react-native'
import { Text, TextInput, Button, RadioButton, List, Modal } from 'react-native-paper';
import styles from '../styles/globalStyles'
import quoteContext from '../context/quote/quoteContext';
import CardVehicle from '../components/CardVehicle';




const QuoteScreen = () => {
    const cotx = useContext(QuoteContext)
    const { car } = useContext(QuoteContext)
    //console.log('quoteScreen montado componente -----------',car.name);
    const [value, setValue] = useState('');
    const [expanded, setExpanded] = useState(true);
    const [idNumber, setIdNumber] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [email, setEmail] = useState('')
    const { name, urlImagen, description, price } = car

    const handleQuote = () => {
        console.log('el carro seleccionado desde quoteScreen>>>>>>>>>>>>>>>', cotx)
        console.log('Cotizando')
        if ([idNumber, value].includes('')) {
            console.log('no paso la validacion')
            Alert.alert(
                "Error",
                "Todos los campos son obligatorios",
            )
            return
        }
        if (!idNumber || idNumber.trim() === "" || idNumber.length < 5 || idNumber.length > 10) {
            console.log("Cédula no válida supera los 10 digitos");
            /* throw new Error("Cédula no válida: por favor verifique si dejó el campo vacío o excedió los 10 dígitos");*/
            Alert.alert(
                "Error",
                "Cédula no válida el numero de documento debe estar entre 5 y 10 digitos",
            )
            return
        }
        if (isNaN(idNumber)) {
            /* throw new Error("La cédula debe ser numérica"); */
            console.log("La cédula debe ser numérica");
            Alert.alert(
                "Error",
                "La cédula debe ser numérica",
            )
            return
        }
    }

        return (

            <SafeAreaView style={styles.containerMain}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headerText} variant="displayMedium">Cotizacion Vehiculo</Text>
                    </View>
                    <View>
                    <CardVehicle
                        key={car.id}
                        urlImagen={urlImagen}
                        name={name}
                        description={description}
                        price={price}
                    />
                </View>
                    <View style={styles.container}>
                        <View >
                            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                <Text style={styles.label}>Tipo Documento</Text>
                                <View style={styles.opcRadioButton}>

                                    <RadioButton value="cc" />
                                    <Text>Cédula</Text>
                                    <RadioButton value="cce" />
                                    <Text>Cédula Extranjería</Text>
                                </View>

                            </RadioButton.Group>
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder='1017212333'
                            placeholderTextColor={'#b9b5b5'}
                            label="Numero Documento"
                            keyboardType='numeric'
                            value={idNumber}
                            onChangeText={setIdNumber}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='Nombre'
                            placeholderTextColor={'#b9b5b5'}
                            label="Nombre"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Apellido'
                            placeholderTextColor={'#b9b5b5'}
                            label="Apellido"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='31x-xxxxx-xxxx'
                            placeholderTextColor={'#b9b5b5'}
                            label="Telefono Contacto"
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#b9b5b5'}
                            label="email@correo.com"
                            keyboardType='email-address'
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='Marca'
                            placeholderTextColor={'#b9b5b5'}
                            label="Marca"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='Modelo'
                            placeholderTextColor={'#b9b5b5'}
                            label="Modelo"
                        />

                        <View>
                            <Pressable
                                style={styles.btnSend}
                                onLongPress={() => {
                                    /* setModalVisible(!modalVisible) */
                                }}
                            >
                                <Text style={styles.btnText}>Enviar</Text>
                            </Pressable>

                            {/*                   <Pressable
                      style={styles.btnCancelar}
                      onLongPress={() => {
                          setModalCotizaciones(false)
                      }}
                  >
                      <Text style={styles.btnTexto}>X Cancelar</Text>
                  </Pressable> */}
                        </View>

                    </View>


                </ScrollView>
            </SafeAreaView>

        )
    }

    export default QuoteScreen
