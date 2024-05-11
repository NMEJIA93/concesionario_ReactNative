import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/globalStyles'
import { SafeAreaProvider } from 'react-native-safe-area-context'
 
const CardVehicle = ({ urlImagen, description, price, name, carS  }) => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text>Carro a cotizar</Text>
                <Text>{name}</Text>
                <Text>{price}</Text>
            </View>
        </SafeAreaProvider>
    )
}
 
export default CardVehicle