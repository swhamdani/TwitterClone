// SearchStackNavigator.js=
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/dashboard/search/SearchScreen";
import SearchSettings from "../screens/dashboard/search/SearchSettings";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons"; // Import the correct icon library
import styles from "./styles";

const Stack = createNativeStackNavigator();

function CustomBackButton({ onPress }) {
    return (
      <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="arrow-back" size={24} color={Colors.white} />
        <View style={styles.container}>
            <Text style={styles.text}>Explore Settings</Text>
            <Text style={styles.idText}>@wasif_514</Text>
        </View>
      </TouchableOpacity>
    );
  }

function SearchStackNavigator() {
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
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "Search", headerShown: false }} // Hide the header
      />
      <Stack.Screen
        name="SearchSettings"
        component={SearchSettings}
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

export default SearchStackNavigator;
