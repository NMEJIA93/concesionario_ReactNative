import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Vehicle = ({ urlImagen, description, price }) => {
  return (
    <View style={styles.container}>
           
            <Image
                source={{ uri: urlImagen }}
                style={styles.img}
            />
            <Text style={styles.descrip}>{description}</Text>
            <Text style={styles.princ}>${price}</Text>
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding: 20,
      backgroundColor: '#f2f2f2',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
        
  
    },
    title: {
      fontSize: 25,
      color: '#333',
      textAlign: 'center',
      marginBottom:5
    },
    img: {
      width: 150,
      height: 200
    },
   
      descrip:{
      fontSize: 18,
      color: '#666666',
      marginBottom: 5, 
      fontFamily: 'sans-regular',
      },
      princ:{
          fontSize:18,
          fontWeight:'bold',
          color:'#c91717',
          marginStart:10
      }
  
  
  })
export default Vehicle