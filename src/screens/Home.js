import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'


const App = () => {
  const [activeState,setActiveState] = useState('Delivery')
  return (
    <SafeAreaView style={{backgroundColor:'#eee',flex:1}}>
      <View style={{backgroundColor:'white',padding:15}}>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
          <HeaderTabs title='Delivery' activeState={activeState} setActiveState={setActiveState} />
          <HeaderTabs title='Pickup' activeState={activeState} setActiveState={setActiveState} />
        </View>
        <SearchBar />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})