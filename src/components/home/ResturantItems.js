import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons'
 export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    }
  ];
const ResturantItems = ({localResturant}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={{marginBottom:50}}>
        {localResturant.map((items,index)=>(
        <View key={index} style={{marginTop:10,padding:10,backgroundColor:'white'}}>
        <ResturantImage image={items.image_url} />
        <ResturantInfo item={items} />
        </View>
        ))}
    </TouchableOpacity>
  )
}

export default ResturantItems

const ResturantImage = (props)=>{
    return(
    <>
        <Image 
        source={{
            uri:props.image
        }}
        style={{width:"100%",height:200}}
        />
        <TouchableOpacity style={{position:'absolute',right:10,top:10}}>
            <MaterialComunity name="heart-outline" size={30} color="#fff" />
        </TouchableOpacity>
    </>
    )
}

const ResturantInfo = (props)=>{
    return(
        <View style={{marginHorizontal:10, display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View>
                <Text style={[styles.textColor,{fontSize:15,fontWeight:'bold'}]}>{props.item.name}</Text>
                <Text style={styles.textColor}>30-40 . min</Text>
            </View>
            <View style={{width:30,height:30,backgroundColor:'#eee',justifyContent:'center',alignItems:'center',borderRadius:15}}>
                <Text style={styles.textColor}>{props.item.rating }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textColor:{
        color:'black'
    }
})