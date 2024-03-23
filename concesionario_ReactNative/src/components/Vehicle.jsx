import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Vehicle = ({ urlImagen, description, price, name, onCotizar }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: urlImagen }}
        style={styles.img}
      />
      <Text style={styles.descrip}>{name}</Text>
      <Text style={styles.descrip}>{description}</Text>
      <Text style={styles.princ}>{price}</Text>
      <Button style={styles.buttons}
        mode="contained" onPress={() => navigation.navigate('quoteScreen')}>Cotizar</Button>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttons: {
    marginVertical: 10,
    backgroundColor: '#ffba00',
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  title: {
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
    marginBottom: 5
  },
  img: {
    width: 300,
    height: 200
  },

  descrip: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
    fontFamily: 'sans-regular',
  },
  princ: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginStart: 10
  }


})
export default Vehicle