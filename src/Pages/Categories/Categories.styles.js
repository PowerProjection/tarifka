import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'
      },
      categoryContainer:{
        backgroundColor:'#eceff1',
        margin:5,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5
      },
      categoryText:{
        fontSize:20,
        color:'black',
        marginLeft:10
      },
      categoryImg:{
        width:70,
        height:70,
        resizeMode:'contain',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
      }
})