import React, { useContext, useEffect } from 'react'
import { ScrollView } from 'react-native';
import Vehicle from './Vehicle';
import CatalogueContext from '../context/catalogue/catalogueContext'; 
import { Text } from 'react-native-paper';

import quoteContext from '../context/quote/quoteContext';


const VehicleList = () => {

  const { catalogue, getListCars } = useContext(CatalogueContext)
  const {SelectVehicle}=useContext(quoteContext)



  useEffect(() => {
      getListCars()
  }, [])
  
  return (
    <ScrollView>
      
      {catalogue.map((vehicle) => {
        const { name,urlImagen,description, price} = vehicle
        console.log('entro ')
        return (
          <Vehicle
            key={vehicle.id}
            urlImagen={urlImagen}
            name={name}
            description={description}
            price={price}
            Car={vehicle} // Pasar la función de manejo como prop
          />
        )
      })}
   
    </ScrollView>
  );
}

export default VehicleList