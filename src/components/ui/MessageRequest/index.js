import {Text, View, Image } from "react-native";
import React from "react";
import IMAGES from "../../../constants/Images";
import styles from "./styles";
  
const MessageRequest = ({message}) => {

    return (
        <View style={styles.rootContainer}>
            <View style={styles.profilePhotoContainer}>
                <Image source={IMAGES.messageRequest} style={styles.image}/>
            </View>
            <Text style={styles.boldText}>{message}</Text>
        </View>  
    );
};
  
export default MessageRequest;