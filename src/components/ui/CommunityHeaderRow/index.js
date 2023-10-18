import {Text, View, Image } from "react-native";
import React from "react";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../../constants/colors";
import IMAGES from "../../../constants/Images";
import TitleText from "../TitleText";
import styles from "./styles";

const CommunityHeaderRow = () => {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.profilePhotoContainer}>
                <Image source={IMAGES.profileImage2} style={styles.image}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>Communities</Text>
            </View> 
            <View style={styles.iconsContainer}>
                <Ionicons style={styles.searchIcon} name='search' size={30} color={Colors.white}/>
                <MaterialCommunityIcons style={styles.addCommnityIcon} name='account-plus' size={30} color={Colors.white}/>
            </View>
        </View>
    );
};
  
export default CommunityHeaderRow;