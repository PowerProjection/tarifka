import { FlatList, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import useFetch from '../../customHooks/useFetch/useFetch'
import styles from './Meal.styles'

const Home = (props) => {
  const categoryName = props.route.params.categoryName
  const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryName
  const {data} = useFetch(URL)

  const render = ({item}) => {
    const id = item.idMeal
    return(
      <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Details', {id})}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:item.strMealThumb}} />
        <Text numberOfLines={1} style={styles.text} >{item.strMeal}</Text>
      </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.mainContainer} >
      <FlatList data={data.meals} renderItem={render} />
      <Text>...</Text>
    </View>
  )
}

export default Home