import {Platform, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
import Colors from "../../../../constants/colors";
import IMAGES from "../../../../constants/Images";
  
const NotificationInfo = ({type}) => {

    const getIcon = () => {
        switch (type) {
          case 'notifications':
            return <MaterialIcons name='notifications' size={24} color={Colors.blueIcon} />;
          case 'retweet':
            if (Platform.OS === 'ios') {
              return <Entypo name='retweet' size={22} color={Colors.greenIcon} />;
            } else {
              return <MaterialIcons name='reply-all' size={24} color={Colors.blueIcon} />;
            }
          case 'like':
            return <Ionicons name='heart' size={24} color={Colors.pinkIcon} />;
          case 'follow':
            if (Platform.OS === 'ios') {
              return <Feather name='user' size={24} color={Colors.blueIcon} />;
            } else {
              return <MaterialCommunityIcons name='account-check' size={24} color={Colors.blueIcon} />;
            }
          case 'message':
              if (Platform.OS === 'ios') {              
                return <Entypo name='message' size={24} color={Colors.greenIcon} />;   
              } else {
                return <MaterialCommunityIcons name='message' size={24} color={Colors.greenIcon} />;
              }
          case 'verified':
              if (Platform.OS === 'ios') {              
                return <MaterialIcons name='verified' size={24} color={Colors.blueIcon} />;  
              } else {
                return <MaterialCommunityIcons name='check-circle' size={24} color={Colors.greenIcon} />;
              }
          case 'mention':
              if (Platform.OS === 'ios') {              
                return <Octicons name='mention' size={24} color={Colors.greenIcon} />;
              } else {
                return <MaterialCommunityIcons name='head-check' size={24} color={Colors.greenIcon} />;
              }
          default:
            return <MaterialIcons name='notifications' size={24} color={Colors.blueText} />;
        }
    };
  
    return (
        <View style={styles.rootContainer}>
            <View style={styles.profilePhotoContainer}>
                {getIcon()}
            </View>
            <View style={styles.iconContainer}>
                <Image source={IMAGES.profileImage} style={styles.image}/>
                <Image source={IMAGES.profileImage1} style={styles.image}/>
                <Image source={IMAGES.profileImage2} style={styles.image}/>
            </View>
        </View>
    );
};
  
export default NotificationInfo;