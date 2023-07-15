import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderTabs = (props) => {
  return (
        <TouchableOpacity onPress={()=>props.setActiveState(props.title)} style={{backgroundColor:props.activeState===props.title?'black':'white',paddingHorizontal:16,paddingVertical:6,borderRadius:30,marginTop:5,marginHorizontal:2}}>
            <Text style={{color:props.activeState===props.title?'white':'black',fontSize:18,fontWeight:'900'}}>{props.title}</Text>
        </TouchableOpacity>
        )
}

export default HeaderTabs

const styles = StyleSheet.create({})