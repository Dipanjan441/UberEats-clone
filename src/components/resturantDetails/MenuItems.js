import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useState } from 'react';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const MenuItems = ({resturantName}) => {
  const cartItemsArray = useSelector(state=>state.cartItems.itemDetails);
  console.log(useSelector(state=>state.cartItems))
  console.log(cartItemsArray.length);

  const dispatch = useDispatch();
  const setItems = (item,isCheckedValue) => {
    isCheckedValue ? dispatch(addToCart({foodItem:item,resturantName})) : dispatch(removeFromCart(item.id));
    console.log(cartItemsArray);
  }
  const foodItems = [
    {
      id:1,
      name: 'Chiken curry',
      image_url:
        'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
      categories: ['Cafe', 'Bar'],
      price: '5$',
      description: 'this is very testy and good food give a try please',
    },
    {
      id:2,
      name: 'Hakka Noodles',
      image_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Cafe', 'Bar'],
      price: '12$',
      description: 'this is very testy and good food give a try please',
    },
    {
      id:3,
      name: 'chiken kabeb',
      image_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Indian', 'Bar'],
      price: '8$',
      description: 'this is very testy and good food give a try please',
    },
    {
      id:4,
      name: 'Chiken curry',
      image_url:
        'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
      categories: ['Cafe', 'Bar'],
      price: '5$',
      description: 'this is very testy and good food give a try please',
    },
    {
      id:5,
      name: 'Hakka Noodles',
      image_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Cafe', 'Bar'],
      price: '12$',
      description: 'this is very testy and good food give a try please',
    },
    {
      id:6,
      name: 'chiken kabeb',
      image_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Indian', 'Bar'],
      price: '8$',
      description: 'this is very testy and good food give a try please',
    },
    {
      id:7,
      name: 'Chiken curry',
      image_url:
        'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
      categories: ['Cafe', 'Bar'],
      price: '5$',
      description: 'this is very testy and good food give a try please',
    },
    {
      id:8,
      name: 'Hakka Noodles',
      image_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Cafe', 'Bar'],
      price: '12$',
      description: 'this is very testy and good food give a try please',
    },
    {
      id:9,
      name: 'chiken kabeb',
      image_url:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      categories: ['Indian', 'Bar'],
      price: '8$',
      description: 'this is very testy and good food give a try please',
    },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 400}}>
      {foodItems.map((item, index) => (
        <View key={index}>
          <View style={styles.menuItemsStyles}>
            <BouncyCheckbox
              iconStyle={{borderColor: 'gray', borderRadius: 0}}
              fillColor="green"
              isChecked={cartItemsArray.length?cartItemsArray.includes(item):false}
              // onPress={() => dispatch(addToCart({foodItem:item,resturantName}))}
              onPress={(isCheckedValue)=>setItems(item,isCheckedValue)}
            />
            <FoodInfo item={item} />
            <FoodImage item={item} />
          </View>
          <Divider
            width={0.8}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const FoodInfo = props => {
  return (
    <View style={{width: '55%', display: 'flex'}}>
      <Text style={{fontSize: 18, fontWeight: '600', color: 'green'}}>
        {props.item.name}
      </Text>
      <Text>{props.item.description}</Text>
      <Text>{props.item.price}</Text>
    </View>
  );
};
const FoodImage = props => (
  <View style={{width: '30%'}}>
    <Image
      source={{uri: props.item.image_url}}
      style={{width: '90%', height: 80, borderRadius: 10}}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemsStyles: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
