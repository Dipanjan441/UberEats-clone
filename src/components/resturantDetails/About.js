import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
    const image = "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";
    const title = "Chinsese special kitchen";
    const description = "chinese . Special Food . $$ . 🎫 . 4.2⭐ (3400+)";
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