import {Text, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from "../../../constants/colors";
import IMAGES from "../../../constants/Images";
import styles from "./styles";
  
const DMInfo = ({id, name, time, status}) => {
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
            {/* Apply bold style if status is 'new' */}
            <Text style={[styles.username, status === "new" && styles.boldText]} numberOfLines={1}>
            {name.length < 10 ? `${name}` : `${name.substring(0, 10)}...`}
            </Text>
            <Text style={styles.text} numberOfLines={1}>
            {id.length < 10 ? `${id}` : `${id.substring(0, 10)}...`}
            </Text>
            <View style={styles.dot}>
            <MaterialCommunityIcons name="checkbox-blank-circle" size={8} color={Colors.brightGreyText} />
          </View>
          <Text style={styles.text}>{time}</Text> 
        </View>
        {status === "new" && (
            <View style={styles.settingContainer}>
              <MaterialCommunityIcons name='checkbox-blank-circle' size={12} color={Colors.blueIcon} />
            </View>
         )}
    </View>
            
        
    );
};
  
export default DMInfo;