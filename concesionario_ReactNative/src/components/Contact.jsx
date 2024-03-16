import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

const Contact = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.textTitle}>
                    Contactanos
                </Text>
                <Text style={styles.textContent}>
                {'\n'}Estamos aqui para ayudarte{'\n'}{'\n'}{'\n'}
                    Asesor:
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.textContent}> 
                        Andres Sanchez{'\n'}
                        Cel: 350400420X{'\n'}{'\n'}
                        E-mail:{'\n'}AndresT.entierro@Chevi.co{'\n'}{'\n'}
                        www.chevrolet.com{'\n'}
                    </Text>
                </View>
            </View>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffba00',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    subContainer: {
        width: 350,
        height: 250,
        backgroundColor: '#dadada',
        alignContent: 'center',
    },
    textTitle: {
        fontSize: 40,
        color: '#210dd1',
        textAlign: 'center',
        marginHorizontal: 15,
        marginVertical: 15
    },
    textContent: {
        fontSize: 25,
        color: '#210dd1',
        textAlign: 'center',
        marginHorizontal: 15,
        marginVertical: 15,
        fontWeight: 'bold',
    },

})

export default Contact
