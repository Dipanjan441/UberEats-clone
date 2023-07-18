import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../components/resturantDetails/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import MenuItems from '../components/resturantDetails/MenuItems'

const ResturantDetails = ({route}) => {
  return (
    <View>
      <About routeData={route.params} />
      <Divider width={1.8} style={{marginVertical:10}} />
      <MenuItems />
    </View>
  )
}

export default ResturantDetails

const styles = StyleSheet.create({})