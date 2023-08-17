import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Cart = () => {
  const cartItemsArray = useSelector(state => state.cartItems.items);
  return (
    <View>
        <Text>Total items {cartItemsArray.length}</Text>
        <Text>Items are :</Text>
        {cartItemsArray.length?
        cartItemsArray.map((item,index)=><View key={index}>
            <Text>{item}</Text>
        </View>):
        <Text>No Items</Text>}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
