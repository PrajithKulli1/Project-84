import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName = "Home"
        screenOptons={{
            headershown: false
        }}
        >
            <Stack.Screen name="Home" Component={TabNavigator} />
            <Stack.Screen name="PostScreen" Component={PostScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
