import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({routeData}) => {
    const resturantDetails = {
        // title:'Chinsese special kitchen',
        // image: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        // categories:['Chiense','Bravery','Coffie'],
        // rating:4.5,
        // ratingCount:3500
        title: routeData.title,
        image: routeData.image,
        categories: routeData.categories,
        rating: routeData.rating,
        ratingCount: routeData.ratingCount
        
    }
    const {title,image,categories,rating,ratingCount} = resturantDetails;
    const itemCategory = categories.join(" . ")
    // const description = "chinese . Special Food . $$ . 🎫 . 4.2⭐ (3400+)";
    const description = `${itemCategory}  | $$ 🎫 | ${rating}⭐ (${ratingCount}+)`;
    return (
        <View>
            <ResturantImage image={image} />
            <ResturantTitle title={title} />
            <ResturantDescription description={description} />
        </View>
    )
}

export default About

const ResturantImage = (props)=>{
    return (
        <Image source={{uri:props.image}} style={{width:'100%',height:200}} />
    )
}
const ResturantTitle = (props)=>{
    return(
        <Text style={{color:'black',fontSize:20,fontWeight:"600",marginTop:10,marginHorizontal:10}}>{props.title}</Text>
    )
}
const ResturantDescription = (props)=>{
    return(
        <Text style={{color:'black',fontSize:15,fontWeight:"400",marginTop:10,marginHorizontal:10}}>{props.description}</Text>
    )
}

const styles = StyleSheet.create({})