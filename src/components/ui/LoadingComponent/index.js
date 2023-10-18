import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import logo from "../../assets/images/logo.png";
import Colors from "../../constants/colors";
import styles from "./styles";
import useLoadingEffect from "./Hooks/useLoadingEffect";
import { useNavigation } from "@react-navigation/native";

function LoadingComponent({targetScreen}) {
    const navigation = useNavigation();
    const { isLoading } = useLoadingEffect(navigation, targetScreen); // Destructure correctly

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

export default LoadingComponent;
