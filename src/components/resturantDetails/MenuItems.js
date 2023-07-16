import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider';


const MenuItems = () => {
    const foodItems = [
        {
          name: "Chiken curry",
          image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
          categories: ["Cafe", "Bar"],
          price: "5$$",
          description: "this is very testy and good food give a try please"
        },
        {
          name: "Hakka Noodles",
          image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          categories: ["Cafe", "Bar"],
          price: "12$$",
          description: "this is very testy and good food give a try please"
        },
        {
          name: "chiken kabeb",
          image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          categories: ["Indian", "Bar"],
          price: "8$$",
          description: "this is very testy and good food give a try please"
        },
        {
          name: "Chiken curry",
          image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
          categories: ["Cafe", "Bar"],
          price: "5$$",
          description: "this is very testy and good food give a try please"
        },
        {
          name: "Hakka Noodles",
          image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          categories: ["Cafe", "Bar"],
          price: "12$$",
          description: "this is very testy and good food give a try please"
        },
        {
          name: "chiken kabeb",
          image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          categories: ["Indian", "Bar"],
          price: "8$$",
          description: "this is very testy and good food give a try please"
        },
        {
          name: "Chiken curry",
          image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
          categories: ["Cafe", "Bar"],
          price: "5$$",
          description: "this is very testy and good food give a try please"
        },
        {
          name: "Hakka Noodles",
          image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          categories: ["Cafe", "Bar"],
          price: "12$$",
          description: "this is very testy and good food give a try please"
        },
        {
          name: "chiken kabeb",
          image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          categories: ["Indian", "Bar"],
          price: "8$$",
          description: "this is very testy and good food give a try please"
        }
      ];
    return (
        <ScrollView>
            {foodItems.map((item,index)=>(
              <View key={index}>
                <View style={styles.menuItemsStyles} >
                    <FoodInfo item={item} />
                    <FoodImage item={item} />
                </View>
                <Divider width={0.8} orientation='vertical' />
              </View>
            ))}
        </ScrollView>
    )
}

export default MenuItems

const FoodInfo = (props)=>{
    return(
        <View style={{width:'60%',display:'flex'}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'green'}}>{props.item.name}</Text>
            <Text>{props.item.description}</Text>
            <Text>{props.item.price}</Text>
        </View>
    )
}
const FoodImage = (props)=>(
  <View style={{width:'40%'}}>
    <Image source={{uri:props.item.image_url}} style={{width:'90%',height:80,borderRadius:10}}  />
  </View>
)

const styles = StyleSheet.create({
  menuItemsStyles:{
    margin:10,
    flexDirection:'row',
    justifyContent:'center'
  }
})