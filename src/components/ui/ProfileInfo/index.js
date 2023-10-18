import {Text, View, Image } from "react-native";
import React from "react";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import Colors from "../../../constants/colors";
import IMAGES from "../../../constants/Images";
  
const ProfileInfo = ({id, name, time}) => {
    const getIcon = () => {
        switch (id) {
          case '@johndoe1':
            return <Image source={IMAGES.profileImage} style={styles.image}/>;
          case '@alicesmith2':
            return <Image source={IMAGES.profileImage1} style={styles.image}/>;
          case '@bobjohnson3':
            return <Image source={IMAGES.profileImage2} style={styles.image} />;
          default:
            return <Image source={IMAGES.profileImage1} style={styles.image}/>;
        }
    };
    return (
    <View style={styles.rootContainer}>
        <View style={styles.profilePhotoContainer}>
            {getIcon()}
        </View>
        <View style={styles.userContainer}>
            <Text style={styles.username} numberOfLines={1}>{name.length < 10
                ? `${name}`
                : `${name.substring(0, 10)}...`}</Text>
            <Text style={styles.text}>{id.length < 10
                ? `${id}`
                : `${id.substring(0, 10)}...`}</Text>
            <View style={styles.dot}>
                <Entypo name='dot-single' size={12} color={Colors.brightGreyText} />
            </View>
            <Text style={styles.text}>{time}</Text>
        </View>
        <View style={styles.settingContainer}>
            <Ionicons name='ellipsis-vertical' size={16} color={Colors.brightGreyText}/>
        </View>
    </View>
            
        
    );
};
  
export default ProfileInfo;