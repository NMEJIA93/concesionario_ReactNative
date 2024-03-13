import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
    },
    contenedor: {
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

    },
    label: {
        textAlign: 'left',
        fontSize: 19,
        color: '#3B82F6',

    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'left',
        marginTop: 10,

    },
    botonTexto: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: "uppercase",
        fontWeight: 'bold'
    },
    boton: {
        marginTop: 30,
        backgroundColor: '#1048A4',
        padding: 10,
        borderRadius: 10

    },
    header: {

        fontSize: 30,
        textAlign: 'center',
        color: '#D5D5D5',
        backgroundColor: '#000000',
        padding: 10,
        fontFamily: 'sans-regular',


    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },
    containerMain: {
        backgroundColor: "#494ce7",
        flex: 1
    },
    btnCancelar: {
        marginVertical: 10,
        backgroundColor: '#5827A4',
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    btnText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    contenedorOpc: {
        flexDirection: 'row',

    },

    btnPrimary: {
        marginVertical: 25,
        backgroundColor: '#1E2737',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 5,
        height: 100,
        width: 300,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyTecnicalServiceScreen: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;