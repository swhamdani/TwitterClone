import {Text, View, Image} from "react-native";
import React from "react";
import styles from "./styles";
import NotificationInfo from "./NotificationInfo";
  
const NotificationItem = ({notificationData}) => {

    if (!notificationData) {
      console.error("notificationData is undefined.");
      return null;
    }
  
    return (
        <View style={styles.rootContainer}>
          <NotificationInfo type={notificationData.type} />
          <Text style={styles.text}>
          {notificationData.text}
           
          </Text>
        </View>
      );
}; 
  
export default NotificationItem;