import React, { useContext } from 'react'
import { View } from 'react-native'

import quoteContext from '../context/quote/quoteContext'

const SummaryQuote = () => {
    const { quote } = useContext(quoteContext)
    return (
        <View>
            <Text>
                {quote}
            </Text>
        </View>
    )
}

export default SummaryQuote
