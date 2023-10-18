import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FollowingScreen from "../screens/dashboard/home/FollowingScreen";
import Colors from "../constants/colors";
import VerifiedScreen from "../screens/dashboard/notifications/VerifiedScreen";
import MentionedScreen from "../screens/dashboard/notifications/MentionedScreen";
import AllScreen from "../screens/dashboard/notifications/AllScreen";

const Tab = createMaterialTopTabNavigator();

const NotificationsTabNavigator = () => {
    return (
      <Tab.Navigator
          screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: Colors.brightGreyText,
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
            marginLeft: 20,
            width: 100,
            backgroundColor: Colors.blueBorder,
          },
        }}
      >
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Verified" component={VerifiedScreen} />
        <Tab.Screen name="Mentions" component={MentionedScreen} />
      </Tab.Navigator>
    );
  };
  
export default NotificationsTabNavigator;