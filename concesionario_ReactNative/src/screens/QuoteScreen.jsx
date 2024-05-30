import React, { useState, useContext } from 'react'
import { View, SafeAreaView, ScrollView, Pressable, Alert } from 'react-native'
import { Text, TextInput, Button, RadioButton, List, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles'
import quoteContext from '../context/quote/quoteContext';
import CardVehicle from '../components/CardVehicle';
import firebase from '../FirebaseDB';




const QuoteScreen = () => {
    const navigation = useNavigation();
    const cotx = useContext(quoteContext)
    const { vehicleLocal } = useContext(quoteContext)
    const { quote, showQuote } = useContext(quoteContext)
    //console.log('quoteScreen montado componente -----------',car.name);
    const [value, setValue] = useState('');
    const [expanded, setExpanded] = useState(true);
    const [idNumber, setIdNumber] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [email, setEmail] = useState('')
    const { name, urlImagen, description, price } = vehicleLocal

    const handleQuote = () => {
        console.log('el carro seleccionado desde quoteScreen>>>>>>>>>>>>>>>', cotx)
        console.log('Cotizando')
        if ([idNumber, value, nameUser, lastName, contactNumber, email].includes('')) {
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

        if (!contactNumber || contactNumber.trim() === "" || contactNumber.length != 10) {
            console.log("Numero contacto no válida debe ser de 10 digitos");
            /* throw new Error("Cédula no válida: por favor verifique si dejó el campo vacío o excedió los 10 dígitos");*/
            Alert.alert(
                "Error",
                "Numero contacto no válida debe ser de 10 digitos",
            )
            return
        }
        if (isNaN(idNumber)) {
            /* throw new Error("La cédula debe ser numérica"); */
            console.log("el numero de contacto debe ser numérica");
            Alert.alert(
                "Error",
                "el numero de contacto debe ser numérica",
            )
            return
        }


        const expresion_regular = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/i;
        if (!expresion_regular.test(email)) {
            console.log("Correo no válido");
            Alert.alert(
                "Error",
                "Correo no valido",
            )
            return
        }


        const quote = {
            vehicle: vehicleLocal,
            tipeId: value,
            idNumber,
            nameUser,
            lastName,
            contactNumber,
            email
        }

        /* console.log("la cotizacion a guardar es ----------------->",quote) */

        showQuote(quote)

        Alert.alert(
            "cotizacion a guardar",
            JSON.stringify(quote, null, 5),
            [
                {
                    text: 'confirmar',
                    onPress: async () => {
                        console.log(' aqui va a enviar a firebase')
                        try {
                            const quoteObj = await firebase.db.collection('quote').add(quote)
                            console.log(quoteObj.id)
                            if (quoteObj.id != null) {
                                setValue('');
                                setExpanded('');
                                setIdNumber('');
                                setNameUser('');
                                setLastName('');
                                setContactNumber('');
                                setEmail('');
                                navigation.navigate('catalogue')
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }
                },
                {
                    text: 'cancelar',
                    style: 'cancel',
                    onPress: () => {
                        console.log(' aqui va a limpiar el formulario')
                    }
                }
            ]
        )
    }

    return (

        <SafeAreaView style={styles.containerMain}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText} variant="displayMedium">Cotizacion Vehiculo</Text>
                </View>
                <View>
                    <CardVehicle
                        key={vehicleLocal.id}
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
                        value={nameUser}
                        onChangeText={setNameUser}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Apellido'
                        placeholderTextColor={'#b9b5b5'}
                        label="Apellido"
                        value={lastName}
                        onChangeText={setLastName}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='31x-xxxxx-xxxx'
                        placeholderTextColor={'#b9b5b5'}
                        label="Telefono Contacto"
                        keyboardType='numeric'
                        value={contactNumber}
                        onChangeText={setContactNumber}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor={'#b9b5b5'}
                        label="email@correo.com"
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />

                    {/* <TextInput
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
                        /> */}

                    <View>
                        <Pressable
                            style={styles.btnSend}
                            onPress={handleQuote}
                        >
                            <Text style={styles.btnText}>Enviar</Text>
                        </Pressable>

                    </View>

                </View>


            </ScrollView>
        </SafeAreaView>

    )
}

export default QuoteScreen
