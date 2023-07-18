import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/screens/Home";
import ResturantDetails from "./src/screens/ResturantDetails";

const RootNavigation=()=>{
    const Stack = createNativeStackNavigator();
    const screenOption = {
        headerShown: false
    }
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Resturant Details" component={ResturantDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;