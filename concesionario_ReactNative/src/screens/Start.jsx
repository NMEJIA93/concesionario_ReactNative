import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




const Start = () => {
  const navigation = useNavigation();
  return (
    <View >
      <View>
      <Text style={styles.banner}>Concesionario NBC</Text>
    </View>
    <View style={styles.promotionContainer}>
      <Image
        source={{uri: 'https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/ranger-raptor/2023/colorizer/gris-piedra/fco-ranger-raptor-colorizer-gris-piedra.jpg.dam.full.high.jpg/1685109984586.jpg'}}
        style={styles.carImage}
        resizeMode="cover"
      />
      <Text style={styles.promotionText}>¡Promoción especial!</Text>
      <Text style={styles.promotionDescription}>Compra este carro y obtén un descuento exclusivo.</Text>
      <Button style={styles.buttons}
        mode="contained" onPress={() => navigation.navigate('quoteScreen')}>Mas detalles</Button>
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
    backgroundColor:'#ffffff'
  },
  banner: {
    fontSize: 30,
    textAlign: 'center',
    color: '#D5D5D5',
    backgroundColor: '#000000',
    padding: 10,
    fontFamily: 'sans-regular',
  },
  promotionContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'#ffffff'
  },
  carImage: {
    width: 300,
    height: 160,
    marginBottom: 10,
  },
  promotionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#000000'
  },
  buttons:{
    marginVertical: 10,
    backgroundColor: '#ffba00',
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFF'
},
  promotionDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color:'#000000'
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
    color:'#000000'
  },
  header: {
    backgroundColor: '#ffffff',
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