import { FlatList, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import useFetch from '../../customHooks/useFetch/useFetch'

import styles from './Categories.styles'


const Categories = ({navigation}) => {
  const response = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  const data = response.data.categories

  const render = ({item}) => {
    const categoryName = item.strCategory
    return(
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Meal', {categoryName} )}>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImg} source={{uri:item.strCategoryThumb}} />
      <Text style={styles.categoryText}>{categoryName}</Text>
    </View>
      </TouchableWithoutFeedback>
    )

  }
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={render} />
    </View>
  )
}

export default Categories