import { FlatList, Text, View, Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../customHooks/useFetch/useFetch'
import styles from './Meal.styles'
import Config from 'react-native-config'

const Home = (props) => {
  const categoryName = props.route.params.categoryName
  const URL = Config.REACT_APP_API_MEAL_URL + categoryName
  const {data,loading} = useFetch(URL)

  if (loading) {
    return(
      <ActivityIndicator size={'large'} />
    )
  }

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