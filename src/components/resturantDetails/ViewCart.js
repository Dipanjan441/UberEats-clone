import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ViewCart = ({resturantName}) => {
  const itemsDetails = ()=> {
    console.log(resturantName)
  }
  return (
    <View style={{zIndex:999,position:'absolute',bottom:300,flex:1,alignItems:'center',flexDirection:'row'}}>
      <View style={{
        flexDirection:'row',justifyContent:'center',width:'100%'
      }}>
          <TouchableOpacity style={{
            backgroundColor:'black',padding:10,borderRadius:50,width:200,justifyContent:'center',alignItems:'center'
          }} onPress={itemsDetails}>
            <Text style={{color:'white',fontSize:20}}>View Cart</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default ViewCart

const styles = StyleSheet.create({})