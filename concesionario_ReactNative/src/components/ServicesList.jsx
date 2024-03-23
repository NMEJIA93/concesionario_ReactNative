import React from 'react'
import { ScrollView } from 'react-native'
import Service from './Service'

const ServicesList = ({ services }) => {
    return (
        <ScrollView>
            {
                services.map((service) => (
                    <Service
                    key={service.id}
                    id={service.id}
                    tipo = {service.tipo}
                    fecha = {service.fecha}
                    />
                ))
            }
        </ScrollView>
    )
}

export default ServicesList
