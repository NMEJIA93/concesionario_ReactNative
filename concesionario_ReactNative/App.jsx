import React from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import QuoteScreen from './src/screens/QuoteScreen'
import TechnicalServiceScreen from './src/screens/TechnicalServiceScreen'
import ServiceHistory from './src/components/ServiceHistory'

const App = () => {
  return (




    <SafeAreaProvider>
      <TechnicalServiceScreen />
    </SafeAreaProvider>


    //<QuoteScreen/>
    //<ServiceHistory/>
  )
}

export default App
