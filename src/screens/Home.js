import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import ResturantItems, { localRestaurants } from '../components/ResturantItems'

const App = () => {
  const [activeState,setActiveState] = useState('Delivery');
  const [localResturantDetails,setLocalResturantDetails] = useState(localRestaurants);
  return (
    <SafeAreaView style={{backgroundColor:'#eee',flex:1}}>
      <View style={{backgroundColor:'white',padding:15}}>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
          <HeaderTabs title='Delivery' activeState={activeState} setActiveState={setActiveState} />
          <HeaderTabs title='Pickup' activeState={activeState} setActiveState={setActiveState} />
        </View>
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems localResturant={localResturantDetails} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})