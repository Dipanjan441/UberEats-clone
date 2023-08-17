import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/screens/Home";
import ResturantDetails from "./src/screens/ResturantDetails";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const RootNavigation=()=>{
    const Stack = createNativeStackNavigator();
    const screenOption = {
        headerShown: false
    }
    return(
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Resturant Details" component={ResturantDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default RootNavigation;