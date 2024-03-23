import React from 'react'
import { ScrollView } from 'react-native'
import Service from './Service'
import { View } from 'react-native'

const ServicesList = ({ services }) => {
    return (
        <View>
            <ScrollView>
                {
                    services.map((service) => (
                        <Service
                            key={service.id}
                            id={service.id}
                            tipo={service.tipo}
                            fecha={service.fecha}
                        />
                    ))
                }
            </ScrollView>
        </View>

    )
}

export default ServicesList
