import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ForYouScreen from "../screens/dashboard/home/ForYouScreen";
import FollowingScreen from "../screens/dashboard/home/FollowingScreen";
import Colors from "../constants/colors";

const Tab = createMaterialTopTabNavigator();

const HomeScreenTabNavigator = () => {
    return (
      <Tab.Navigator
          screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: Colors.brightGreyText,
          tabBarGap: 16,
          tabBarStyle: {
            backgroundColor: Colors.primaryColor,
            height:'auto'
          },
          tabBarLabelStyle: {
            fontSize: 18, // Adjust the font size as needed
            fontWeight: 'bold',
            alignSelf: 'center',
            textTransform: 'none', // Prevent label text from being capitalized
          },
          tabBarIndicatorStyle: {
            marginLeft: 50,
            width: 100,
            backgroundColor: Colors.blueBorder,
          },
        }}
      >
        <Tab.Screen name="For you" component={ForYouScreen} />
        <Tab.Screen name="Following" component={FollowingScreen} />
      </Tab.Navigator>
    );
  };
  
export default HomeScreenTabNavigator;