import { FlatList, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import useFetch from '../../customHooks/useFetch/useFetch'
import Config from 'react-native-config'

import styles from './Categories.styles'


const Categories = ({navigation}) => {
  const response = useFetch(Config.REACT_APP_API_CATEGORY_URL)
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