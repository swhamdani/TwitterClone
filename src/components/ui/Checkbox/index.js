import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";
  
const CheckBox = ({title, onPress, isChecked}) => {
    const iconName = isChecked ? "checkbox-marked" : "checkbox-blank-outline";
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color="#fff" />
            </Pressable>
        </View>
    );
};
  
export default CheckBox;