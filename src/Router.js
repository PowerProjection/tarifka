import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from './Pages/Categories'
import MealScreen from './Pages/Meal'
import DetailScreen from './Pages/Detail'

const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={styles.nav}>
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen name="Meal" component={MealScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({nav:{headerTitleAlign:'center', headerTintColor:'orange'},})