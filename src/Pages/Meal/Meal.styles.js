import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window')

export default styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'orange'
    },
    container:{
        width: window.width,
        flex:1,
        backgroundColor:'orange',
        borderRadius:10,
        padding:10
        },
    image:{
        width: "100%",
        height: window.height / 4,
        resizeMode:'cover',
        borderRadius:10,
    },
    text:{
        textAlign:'right',
        textAlignVertical:'center',
        fontSize:29,
        height:40,
        marginTop:-40,
        color:'white',
        fontWeight:'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        paddingRight:10,
        paddingLeft:10
    }

});