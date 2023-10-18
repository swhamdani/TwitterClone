// SearchStackNavigator.js=
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons"; // Import the correct icon library
import styles from "./styles";
import CommunityScreen from "../screens/dashboard/community/CommunityScreen";
import SuggestedCommunitiesScreen from "../screens/dashboard/community/SuggestedCommunitiesScreen";

const Stack = createNativeStackNavigator();

function CustomBackButton({ onPress }) {
    return (
      <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="arrow-back" size={24} color={Colors.white} />
        <View style={styles.container}>
            <Text style={styles.text}>Suggested Communities</Text>
        </View>
      </TouchableOpacity>
    );
  }

function CommunityStackNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor, // Change the background color here
        },
        headerTintColor: Colors.white, // Change the text color if needed
        headerTitleStyle: {
          fontWeight: "bold", // You can customize text styles as well
        },
      }}
      >
        <Stack.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{ title: "Search", headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="SuggestedCommunity"
          component={SuggestedCommunitiesScreen}
          options={({ navigation }) => ({ // Pass the navigation prop here
            title: "",
            headerLeft: () => (
              <CustomBackButton onPress={() => navigation.goBack()} /> // Use navigation prop to navigate back
            ),
          })}
          
        />
    </Stack.Navigator>
  );
}

export default CommunityStackNavigator;
