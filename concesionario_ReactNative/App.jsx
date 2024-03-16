import React from 'react'

import Navigation from './src/navigation/Navigation'
import { View, } from 'react-native'
import TechnicalServiceScreen from './src/screens/TechnicalServiceScreen'
import TechnicalServiceFormScreen  from "./src/screens/TechnicalServiceFormScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import QuoteScreen from './src/screens/QuoteScreen';




const App = () => {
  return (

    /*     <Navigation/> */
  

    <SafeAreaProvider>
     {/*  <QuoteScreen/>  */}
       <TechnicalServiceScreen/>   
     {/*  <TechnicalServiceFormScreen/> */}
    </SafeAreaProvider>


    //<QuoteScreen/>
    //<ServiceHistory/>
  )
}

export default App
