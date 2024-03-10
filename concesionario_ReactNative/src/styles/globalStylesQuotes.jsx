import {StyleSheet} from 'react-native';

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
        backgroundColor: '#3B82F6',
        paddingVertical: 10,
        borderRadius: 10,
        alignContent: 'center',
        margin: 10

    },
    texto: {
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
    btnTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    btnPrimary: {
        marginVertical: 10,
        backgroundColor: '#36a427',
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    contenedorOpc:{
        flexDirection:'row',
        
    }
})

export default styles;