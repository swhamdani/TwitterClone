import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Entypo from 'react-native-vector-icons/Entypo'; 
import Feather from 'react-native-vector-icons/Feather'; 
import HomeScreen from './home/HomeScreen';
import NotificationsScreen from './notifications/NotificationsScreen';
import SearchStackNavigator from '../../navigator/SearchStackNavigator';
import CommunityStackNavigator from '../../navigator/CommunityStackNavigator';
import DMScreen from './messages/DMScreen';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Component
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: Colors.primaryColor }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        
        const isFocused = state.index === index;
        
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <MaterialCommunityIcons
              name={label === 'Home' ? 'home' : 'your-icon-name'} // Customize the icon as needed
              color={isFocused ? Colors.blueBorder : 'gray'} // Change the color when focused
              size={26}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const CommunityIcon = ({ name, size, color }) => {
  // You can add platform-specific adjustments here if needed
  // Determine the icon set based on the platform
  const IconComponent = Platform.OS === 'ios' ? Feather : MaterialCommunityIcons; // Change to your desired Android icon set
  return <IconComponent name={name} size={size} color={color} />;
};
  
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: Platform.OS === 'android'? 60 : 80,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: Colors.primaryColor,
            position: 'absolute',
            borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen name="Home" 
      component={HomeScreen} 
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Search" 
        component={SearchStackNavigator} 
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon name="search-sharp" size={26} color={color}/>
        ),
      }}
      /> 
      <Tab.Screen name="Community" 
        component={CommunityStackNavigator} 
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          // <Feather name="users" color={color} size={26} />
          <MaterialCommunityIcons name="account-multiple" size={26} color={color}/>
        ),
      }}
      />
      <Tab.Screen name="Notify" 
        component={NotificationsScreen} 
        options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Messages" 
        component={DMScreen}   
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="mail-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function Dashboard() {

    return (
      <BottomTabNavigator />
    );
}

export default Dashboard;