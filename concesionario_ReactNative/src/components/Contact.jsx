import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import styles from '../styles/globalStyles'

const Contact = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text
                    style={styles.headerText}
                    variant="displayMedium">
                    Contacto
                </Text>
            </View>
            <View style={styles.promotionContainer}>
                <Image source={require('../img/Logo_Renaul.jpg')}
                    style={styles.ImageContac}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.bodyTecnicalServiceScreen}>
                <Text style={styles.TextTitleContac}>
                    ¿Quieres comunicarte con nosotros?
                </Text>
                <Text style={styles.TextDescriptionContac}>
                    !TE LLAMARA NUESTRO EXPERTO¡
                </Text>
                <Text style={styles.TextDescriptionContac}>
                    En el horario:
                </Text>
                <Text style={styles.TextDescriptionContac}>
                    Lunes a viernes de 7:00Hr. a 19:00Hr.
                </Text>
                <Text style={styles.TextDescriptionContac}>
                    Sábado de 8:00Hr. a 12:00Hr.
                </Text>
            </View>
            <View style={styles.TextDescripContacAndHeader}>
                <Text style={styles.TextTitleContac}
                variant="displayMedium">
                    Más información
                </Text>
            </View>
            <View>
                <Text style={styles.TextDescriptionContac}>
                    Para preguntas sobre el Plan Andres, puedes escribir al correo electrónico: Andres.cafe@renault.com y para preguntas o solicitudes sobre programacion o en la línea nacional gratuita: 350400420X
                </Text>
            </View>
        </View >


    )
}
export default Contact
