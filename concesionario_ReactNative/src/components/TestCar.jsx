import React, { useContext, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import Test from './Test';
import testDriveContext from '../context/testDrive/testDriveContext';
import TestDriveState from '../context/testDrive/testDriveState';


const TestCar = () => {

    const { testDrive, getListCars } = useContext(testDriveContext)

    useEffect(() => {
        return () => {
            getListCars()
        };
    }, [])

    const testConfirmation = () => {
        console.log('boton confirmar carro test card');
    };

    //const navigation = useNavigation();
    return (
        <TestDriveState>
            <View>
                <ScrollView>
                    {testDrive.map((VehicleTest) => {
                        const { name, urlImagen, description, price } = VehicleTest
                        console.log('se seleciono el vehiculo del test')
                        return (
                            <Test
                                key={VehicleTest.id}
                                urlImagen={urlImagen}
                                name={name}
                                description={description}
                                price={price}
                                onCotizar={testConfirmation}
                            />
                        )
                    })}
                </ScrollView>
            </View>
        </TestDriveState>
    );
}



export default TestCar
