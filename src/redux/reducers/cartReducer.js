import { ADD_T0_CART, REMOVE_FROM_CART } from "../constants/constants"

const cartReducer = (state={itemDetails:[],resturantName:''},action)=> {
    switch (action.type) {
        case ADD_T0_CART :
            console.log('add to cart')
            return{
                ...state,
                itemDetails:[...state.itemDetails,action.payload.foodItem],
                resturantName: action.payload.resturantName,
            }
        case REMOVE_FROM_CART :
            console.log('remove from cart')
            const newSate = {...state};
            newSate.itemDetails =  state.itemDetails.filter((item)=>
                 {return item.id !== action.payload.id}
            )
            return newSate;
        default :
            return state;
    }
}
export default cartReducer;