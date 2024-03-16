import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'




const Start = () => {
  return (
    <View style={styles.container}>
      
    <View style={styles.promotionContainer}>
      <Image
        source={{uri: 'https://loscoches.com/wp-content/uploads/2022/06/1-Jeep-Commander-Los-Coches.jpg'}}
        style={styles.carImage}
        resizeMode="cover"
      />
      <Text style={styles.promotionText}>¡Promoción especial!</Text>
      <Text style={styles.promotionDescription}>Compra este carro y obtén un descuento exclusivo.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver más detalles</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contactContainer}>
        <Text style={styles.contactInfo}>Teléfono: 123-456-789</Text>
        <Text style={styles.contactInfo}>Correo electrónico: contacto@tucarro.com</Text>
        <Text style={styles.contactInfo}>Dirección: Calle Principal #123</Text>
      </View>
      
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  promotionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  carImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  promotionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  promotionDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  contactContainer: {
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
 
  contactContainer: {
    alignItems: 'center',
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  header: {
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Start