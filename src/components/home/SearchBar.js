import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
  return (
    <View style={{marginTop:15,flexDirection:'row'}}>
      <GooglePlacesAutocomplete placeholder='Search'
      styles={{textInput:{
        fontSize:20,
        fontWeight:'500',
        backgroundColor:'#eee'
      },
      textInputContainer:{
        flexDirection:'row',
        backgroundColor:'#eee',
        borderRadius:40,
        alignItems:'center',
      }
    }}
    renderLeftButton={()=>(
    <View style={{marginLeft:10}}>
        <Ionicons name='location' size={24} color='black' />
    </View>)}
    renderRightButton={()=>(
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',padding:9,borderRadius:30,marginRight:10}}>
            <AntIcon name='clockcircle' size={12} />
            <Text style={{marginLeft:5}}>Search</Text>
        </View>
    )}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})