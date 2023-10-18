import {Text, View, Image } from "react-native";
import React from "react";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import Colors from "../../../constants/colors";
import IMAGES from "../../../constants/Images";
import RoundedCornerTextInput from "../RoundedCornerTextInput";

const SearchX = ({placeholder, onPress}) => {

    const handlePress = () => {
        console.log("Icon pressed");
        onPress(); // Call the provided onPress function
    };

    return (
    <View style={styles.rootContainer}>
        <View style={styles.profilePhotoContainer}>
            <Image source={IMAGES.profileImage} style={styles.image}/>
        </View>
        <View style={styles.searchInputContainer}>
            <RoundedCornerTextInput
                placeholder={placeholder}
                onChangeText={(text) => console.log(text)}/>
        </View>
        <View style={styles.settingContainer}>
            <Ionicons name='settings' size={25} color={Colors.white} onPress={handlePress}/>
        </View>
    </View>
            
        
    );
};
  
export default SearchX;