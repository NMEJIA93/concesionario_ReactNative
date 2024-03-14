import React from 'react'

import Navigation from './src/navigation/Navigation'
import { View, } from 'react-native'
import TechnicalServiceScreen from './src/screens/TechnicalServiceScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'




const App = () => {
  return (

    /*     <Navigation/> */
  

    <SafeAreaProvider>
      <TechnicalServiceScreen/>
    </SafeAreaProvider>


    //<QuoteScreen/>
    //<ServiceHistory/>
  )
}

export default App
