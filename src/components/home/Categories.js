import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = () => {
  const categoryList = [
    {
      image: require('../../../assets/images/shopping-bag.png'),
      text: 'Pick-Up'
    },
    {
      image: require("../../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../../assets/images/desserts.png"),
      text: "Desserts",
    }
  ];
  return (
    <View style={{marginTop:4,backgroundColor:'#fff',paddingVertical:10,paddingHorizontal:8}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((item,index)=> (
        <View key={index} style={{alignItems:'center', marginHorizontal:4}}>
          <Image 
          source={item.image}
          style={{width:50,height:40,resizeMode:'contain'}}
          />
          <Text style={{fontSize:19,fontWeight:'900'}}>{item.text}</Text>
        </View> )
        )}
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})