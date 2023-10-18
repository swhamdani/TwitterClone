import {Text, View, Image } from "react-native";
import React from "react";
import IMAGES from "../../../constants/Images";
import styles from "./styles";

const CommunityItem = ({id, title, members}) => {
    const getIcon = (id) => {
        switch (id) {
          case 1:
            return <Image source={IMAGES.community} style={styles.communityImage} />;
          case 2:
            return <Image source={IMAGES.community1} style={styles.communityImage} />;
          case 3:
            return <Image source={IMAGES.community2} style={styles.communityImage} />;
          case 4:
            return <Image source={IMAGES.community3} style={styles.communityImage} />;
          default:
            return <Image source={IMAGES.community} style={styles.communityImage} />;
        }
      };

    return (
        <View style={styles.rootContainer}>
            <View style={styles.profilePhotoContainer}>
                {getIcon(id)}
            </View>
            <View style={styles.itemsContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.text}>{members} Members</Text>
                </View> 
                <View style={styles.iconsContainer}>
                    <Image source={IMAGES.profileImage} style={styles.image}/>
                    <Image source={IMAGES.profileImage1} style={styles.image}/>
                    <Image source={IMAGES.profileImage2} style={styles.image}/>
                    <Image source={IMAGES.profileImage1} style={styles.image}/>
                    <Image source={IMAGES.profileImage2} style={styles.image}/>
                </View>
            </View>
            
        </View>
    );
};
  
export default CommunityItem;