import React from 'react'
import Navigation from './src/navigation/Navigation'
import CatalogueState from './src/context/catalogue/catalogueState'
import QuoteState from './src/context/quote/quoteState'

const App = () => {
  return (
    <CatalogueState>
      <QuoteState>
        <Navigation />
      </QuoteState>
    </CatalogueState>

  )
}

export default App
