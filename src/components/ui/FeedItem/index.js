import {Text, View, Image} from "react-native";
import React from "react";
import styles from "./styles";
import ProfileInfo from "../ProfileInfo";
import CommentRetweetRow from '../CommentRetweetRow';
  
const FeedItem = ({profileData}) => {
  
    return (
        <View style={styles.rootContainer}>
            <ProfileInfo name={profileData.name} id={profileData.id} time={profileData.tweetTime} />
            <Text style={styles.text}>{profileData.tweetText}</Text>
            <CommentRetweetRow />
        </View> 
    );
};
  
export default FeedItem;