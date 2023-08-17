import { ADD_T0_CART, REMOVE_FROM_CART } from "../constants/constants";

export function addToCart(data) {
    // console.log(data);
    return {
        type:ADD_T0_CART,
        payload: data
    }
}

export function removeFromCart(id) {
    console.log(id)
    return {
        type : REMOVE_FROM_CART,
        payload : id
    }
}