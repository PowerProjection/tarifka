import { Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import useFetch from '../../customHooks/useFetch/useFetch'
import styles from './Detail.styles'
import MyButton from "../../components/Button"
import Config from 'react-native-config'


const Detail = (props) => {
  const mealID = props.route.params.id
  const URL = Config.REACT_APP_API_DETAIL_URL + mealID
  const {data} = useFetch(URL)

  const render = ({item}) => {
    const id = item.idMeal
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:item.strMealThumb}} />
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.area}>{item.strArea}</Text>
        <View style={styles.lineBorder}></View>
        <Text style={styles.text} >{item.strInstructions}</Text>
        <MyButton text="Watch on Youtube" url={item.strYoutube} />
      </View>
    )
  }

  return (
    <View style={styles.mainContainer} >
      <FlatList style={{flex:1}} data={data.meals} renderItem={render} />
  </View>
  )
}

export default Detail