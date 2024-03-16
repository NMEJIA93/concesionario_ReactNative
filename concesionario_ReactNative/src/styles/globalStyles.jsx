import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
    },
    container: {
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
    containerDatos: {
        flexDirection: 'row',
        
    },
    label: {
        textAlign: 'left',
        fontSize: 19,
        color: '#000000',
        fontWeight:'bold'

    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'left',
        marginTop: 10,

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
        backgroundColor: "#dadada",
        flex: 1
    },
    btnCancel: {
        marginVertical: 10,
        backgroundColor: '#5e5b68',
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },

    btnSend: {
        marginVertical: 10,
        backgroundColor: '#ffba00',
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    btnText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    opcRadioButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    btnPrimary: {
        marginVertical: 25,
        backgroundColor: '#5e5b68',
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
    },
    value:{
        color: '#a58d81',
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 10
    }
})

export default styles;