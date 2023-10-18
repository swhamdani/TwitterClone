import {Text, View } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import Colors from "../../../constants/colors";
  
const SearchTrendsItem = ({trendPlace, trendTitle, number, onPress}) => {

    const handlePress = () => {
        console.log("Icon pressed");
        onPress(); // Call the provided onPress function
    };
  
    return (
        <View style={styles.rootContainer}>
            <View style={styles.leftView}>
                <View style={styles.trendsView}>
                    <Text style={[styles.trendText]}>{'Trending in ' + trendPlace}</Text>
                    <Text style={styles.trendName}>{'#' + trendTitle}</Text>
                    <Text style={styles.text}>{number + ' posts'}</Text>
                </View>
                <View style={styles.settingContainer}>
                    <Ionicons name='ellipsis-vertical' size={16} color={Colors.brightGreyText} onPress={handlePress}/>
                </View>
            </View>
        </View>
    );
};
  
export default SearchTrendsItem;