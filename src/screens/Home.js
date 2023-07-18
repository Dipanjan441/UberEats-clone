import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import ResturantItems, { localRestaurants } from '../components/home/ResturantItems'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import ButtonTabs from '../components/home/ButtonTabs'

const Home = ({ navigation }) => {
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
        <ResturantItems localResturant={localResturantDetails} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <ButtonTabs />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})