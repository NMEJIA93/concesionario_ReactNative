import React from 'react'
import { ScrollView } from 'react-native';
import Vehicle from './Vehicle';



const VehicleList = ({ vehicles }) => {
  const handleCotizar = () => {
    // Lógica para manejar la acción de cotizar
    console.log('Botón Cotizar presionado');
  };
  return (

      <ScrollView>
        {vehicles.map((vehicle) => (
          <Vehicle
          key={vehicle.id}
          urlImagen={vehicle.urlImagen}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          onCotizar={handleCotizar} // Pasar la función de manejo como prop
          />
        ))}
      </ScrollView>
    );
}

export default VehicleList