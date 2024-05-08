import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { IconButton, } from 'react-native-paper';

import Start from '../screens/Start'
import Catalogue from '../screens/Catalogue'
import TechnicalServiceScreen from '../screens/TechnicalServiceScreen'
import QuoteScreen from '../screens/QuoteScreen'
import TestCar from '../components/TestCar';
import Contact from '../components/Contact';
import FormTest from '../components/FormTest';
import TestDriveState from '../context/testDrive/testDriveState';


const Tab = createBottomTabNavigator()
const Navigation = () => {
  const screenOptions = ({ route }) => ({
    tabBarActiveTintColor: '#F47F0A',
    tabBarInactiveTintColor: '#000000',
    tabBarStyle: {
      display: 'flex',
    },
    tabBarIcon: ({ color, size }) => {
      let iconName
      if (route.name === 'start') {
        iconName = "camera";
      } else if (route.name === 'catalogue') {
        iconName = 'camera';
      }
      else if (route.name === 'technicalServiceScreen') {
        iconName = 'web-check';
      } else if (route.name === 'quoteScreen') {
        iconName = 'web-check';
      } else if (route.name === 'technicalServiceFormScreen') {
        iconName = 'web-check';
      }
      console.log('Icon name:', iconName);
      return <IconButton source={iconName} size={size} color={color} />;
    }
  })
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen name='start' component={Start} />
        <Tab.Screen name='catalogue' component={Catalogue} options={{ title: 'Catalogo' }} />
        <Tab.Screen name='technicalServiceScreen' component={TechnicalServiceScreen} options={{ title: 'Servicio Tecnico' }} />
        <Tab.Screen name='quoteScreen' component={QuoteScreen} options={{ title: 'Cotización' }} />
        <Tab.Screen name='testCar' component={TestCar} options={{ title: 'Prueba Manejo' }} />
        <Tab.Screen name='Contact' component={Contact} options={{ title: 'Contactenos' }} />
        <Tab.Screen name='formTest' component={FormTest} options={{ title: 'Test' }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  banner: {
    fontSize: 30,
    textAlign: 'center',
    color: '#D5D5D5',
    backgroundColor: '#000000',
    padding: 10,
    fontFamily: 'sans-regular',
  }
})

export default Navigation