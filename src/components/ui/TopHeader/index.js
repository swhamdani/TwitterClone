import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; // Import Ionicons
import styles from './styles';
import IMAGES from '../../../constants/Images';

function TopHeader() {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={IMAGES.logoIcon} style={styles.image} />
      </View>
    </View>
  );
}

export default TopHeader;
