import React from 'react'
import { View, SafeAreaView, ScrollView, Pressable } from 'react-native'
import { Text, TextInput, Button, RadioButton, List, Modal } from 'react-native-paper';
import styles from '../styles/globalStyles'


const QuoteScreen = () => {
    const [value, setValue] = React.useState('first');
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (

        <SafeAreaView style={styles.containerMain}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText} variant="displayMedium">Cotizacion Vehiculo</Text>
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
