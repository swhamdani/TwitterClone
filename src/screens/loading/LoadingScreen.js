import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import logo from "../../assets/images/logo.png";
import Colors from "../../constants/colors";
import styles from "./styles";

function LoadingScreen({navigation, route}) {
  const [isLoading, setIsLoading] = useState(true);
  const { targetScreen } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: targetScreen }],
        });
    }, 500);

    return () => {
        clearTimeout(timer);
    };
}, [navigation]); // Make sure to include navigation as a dependency

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.white} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : null}
    </View>
  );
}

export default LoadingScreen;
