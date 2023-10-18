import {Text, View, Image} from "react-native";
import React from "react";
import styles from "./styles";
import DMInfo from "../DMInfo";
  
const MessageItem = ({dmData}) => {
  
    return (
        <View style={styles.rootContainer}>
            <DMInfo name={dmData.name} id={dmData.id} time={dmData.tweetTime} status={dmData.status} />
            <Text style={[styles.text, dmData.status === "new" && styles.boldText]}>{dmData.message}</Text>
        </View> 
    );
};
  
export default MessageItem;