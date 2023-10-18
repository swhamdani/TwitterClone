import {Text, View} from "react-native";
import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from "./styles";
import Colors from "../../../constants/colors";
  
const CommentRetweetRow = () => {
  
    return (
        <View style={styles.rootContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.icon}>
                    <View style={styles.row}>
                        <Ionicons name='chatbubble-outline' size={20} color={Colors.brightGreyText}/>
                        <Text style={styles.text}>11</Text>
                    </View>
                </View>
                <View style={styles.icon}>
                    <View style={styles.row}>
                        <MaterialIcons name='compare-arrows' size={25} color={Colors.brightGreyText}/>
                        <Text style={styles.text}>13</Text>
                    </View>
                </View>
                <View style={styles.icon}>
                    <View style={styles.row}>
                        <Ionicons name='heart-outline' size={20} color={Colors.brightGreyText}/>
                        <Text style={styles.text}>90</Text>
                    </View>
                </View>
                <View style={styles.icon}>
                    <View style={styles.row}>
                        <Ionicons name='stats-chart' size={18} color={Colors.brightGreyText}/>
                        <Text style={styles.text}>13.9K</Text>
                    </View>
                </View>
                <View style={styles.shareIcon}>
                    <Ionicons name='share-social-outline' size={20} color={Colors.brightGreyText}/>
                </View>
            </View>
        </View>
    );
};
  
export default CommentRetweetRow;