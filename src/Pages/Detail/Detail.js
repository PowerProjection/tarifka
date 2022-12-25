import { Text, View, FlatList, Image, Button } from 'react-native'
import React from 'react'
import useFetch from '../../customHooks/useFetch/useFetch'
import styles from './Detail.styles'

const Detail = (props) => {
  const mealID = props.route.params.id
  const URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID
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
        <Button style={styles.button} color={'red'} title='Watch on Youtube' onPress={() => console.log("HEYYYY")} />
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