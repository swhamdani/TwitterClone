import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import Colors from '../../constants/colors';
import styles from "./styles";
import IMAGES from '../../constants/Images';

function SplashScreen({navigation}) {
  //const navigation = useNavigation();

  useEffect(() => {
    console.log('Starting splash screen timer...');
    const timer = setTimeout(() => {
      RNBootSplash.hide({ fade: true });
      navigation.navigate('Boarding');
    }, 2000);

    return () => {
      console.log('Clearing timer...');
      clearTimeout(timer); 
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={IMAGES.twitterXWhiteLogo} />
      </View>
    </View>
  );
}

export default SplashScreen;