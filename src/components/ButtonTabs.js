import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5'

const ButtonTabs = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,paddingVertical:10}}>
      <Icons name="home" text="Home" />
      <Icons name="search" text="Browse" />
      <Icons name="shopping-bag" text="Shopping" />
      <Icons name="receipt" text="Order" />
      <Icons name="user" text="Account" />
    </View>
  )
}

export default ButtonTabs

const Icons = (props)=>{
    return (
        <TouchableOpacity>
            <View style={{alignItems:'center'}}>
                <Fontawesome5 
                name={props.name}
                size={25}
                style={{

                }}
                />
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})