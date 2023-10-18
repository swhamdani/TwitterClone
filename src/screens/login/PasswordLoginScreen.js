import { useState, useEffect, isValidElement } from "react";
import { View, Text, SafeAreaView, Pressable} from "react-native";
import styles from './styles';
import TitleText from "../../components/ui/TitleText";
import CustomTextInput from "../../components/ui/CustomTextInput";
import PasswordTextInput from "../../components/ui/PasswordTextInput";
import TopHeader from "../../components/ui/TopHeader";
import Colors from "../../constants/colors";
import BottomView from "../../components/ui/BottomView";
import AsyncStorage from '@react-native-async-storage/async-storage';

function PasswordLoginScreen({navigation}) {
    const [isNextEnabled, setIsNextEnabled] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Fetch values from AsyncStorage and update state
      const fetchStoredData = async () => {
        try {
          const storedName = await AsyncStorage.getItem('username');
          if (storedName) setUsername(storedName);
        } catch (error) {
          console.error('Error fetching stored data:', error);
        }
      };
  
      fetchStoredData();
    }, []);

    const validateSigninForm = async (password) => {
      const storedPassword = await AsyncStorage.getItem('password');
      if (password === storedPassword) {
        // Username match the stored data
        setPassword(password);
        setIsNextEnabled(true);
        console.log('Password matched successful');
      } else {
        setIsNextEnabled(false);
        console.log('Invalid Password');
      }
    };

    const handlePasswordChange = (text) => {
      console.log(text);
      validateSigninForm(text);
    };

    const handleOnNextPress = () => {
      if (isNextEnabled) {
        navigation.navigate('Loading', { targetScreen: 'Dashboard' });
      }
      else{
        console.log('Enter a valid username, email or phone')
      }
    };

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
  };

    const handleOnLeftPress = () => {
    navigation.navigate('UsernameLogin');
    };


    return (
        <SafeAreaView style={styles.container}>          
            <TopHeader />
            {/* <View style={styles.customHeader}>
                <Pressable onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color={Colors.primaryColor} />
                </Pressable>
            </View> */}
            <View style={styles.titleContainer}>
                <TitleText>{'Enter your password'}</TitleText>
            </View>
            <View style={styles.inputContainer}>
                <CustomTextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        isIcon={false}
                />
                <PasswordTextInput
                        placeholder="Password"
                        value={password}
                        secureTextEntry={!isVisible}
                        onChangeText={handlePasswordChange}
                        autoCapitalize="none"
                        isVisible={isVisible} // Pass the isVisible state to the component
                        toggleVisibility={toggleVisibility} 
                        isIcon={isNextEnabled}
                />
            </View>
            <View style={styles.bottomView}>
                <BottomView 
                   leftBtnTitle={'Forgot Password'} 
                   rightBtnTitle={'Log in'}
                   onLeftButtonPress={handleOnLeftPress} 
                   onRightButtonPress={handleOnNextPress} 
                   rightButtonBGColor={isNextEnabled ? Colors.white : Colors.disableButtonBG}
                   rightButtonTxtColor = {isNextEnabled ? Colors.black : Colors.darkGreyText}
                   disabled={!isNextEnabled} // Pass the disabled prop
                />
            </View>
        </SafeAreaView>
    );
}

export default PasswordLoginScreen;