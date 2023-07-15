import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../components/resturantDetails/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const ResturantDetails = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{marginVertical:10}} />
    </View>
  )
}

export default ResturantDetails

const styles = StyleSheet.create({})