import {Text, View, Image } from "react-native";
import React from "react";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";
import Colors from "../../../constants/colors";
  
const DMBottomSheetItem = ({name, title}) => {
    const getIcon = () => {
        switch (name) {
          case 'unfollow':
            return  <AntDesign name="deleteuser" size={24} color={Colors.brightGreyText} />;
          case 'add-to-list':
            return  <Entypo name="add-to-list" size={24} color={Colors.brightGreyText} />;
          case 'mute':
              return  <Ionicons name="volume-mute" size={24} color={Colors.brightGreyText} />;
          case 'leave':
                return  <MaterialCommunityIcons name="message-off" size={24} color={Colors.brightGreyText} />;
          case 'add-to-circle':
                  return  <Ionicons name="person-add" size={24} color={Colors.brightGreyText} />;
          case 'block':
            return  <Entypo name="block" size={24} color={Colors.brightGreyText} />;
            case 'report':
            return <Ionicons name="flag-outline" size={24} color={Colors.brightGreyText} />;;
        }
    };
    return (
    <View style={styles.rootContainer}>
        <View style={styles.profilePhotoContainer}>
            {getIcon()}
        </View>
        <View style={styles.userContainer}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </View>
    );
};
  
export default DMBottomSheetItem;