import { View, Text, SafeAreaView, Pressable} from "react-native";
import styles from './styles';
import TitleText from "../../components/ui/TitleText";
import CustomTextInput from "../../components/ui/CustomTextInput";
import TopHeader from "../../components/ui/TopHeader";
import Colors from "../../constants/colors";
import BottomView from "../../components/ui/BottomView";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function UsernameLoginScreen({navigation}) {
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    const handleUsernameChange = (text) => {
      console.log(text);
      validateSigninForm(text);
    };

    const validateSigninForm = async (usr) => {
      const isUsernameValid = usr.trim().length >= 5; // Check for minimum length
      const storedName = await AsyncStorage.getItem('username');
      if (usr === storedName) {
        // Username match the stored data
        setIsNextEnabled(true);
        console.log('Username matched successful');
      } else {
        setIsNextEnabled(false);
        console.log('Invalid username');
      }
    };

    const handleOnNextPress = () => {
      if (isNextEnabled) {
        navigation.navigate('Loading', { targetScreen: 'PasswordLogin' });
      }
      else{
        console.log('Enter a valid username, email or phone')
      }
    };

    const handleOnLeftPress = () => {
      navigation.navigate('LoginBoarding');
    };

    return (
        <SafeAreaView style={styles.container}>          
            <TopHeader />
            <View style={styles.titleContainer}>
                <TitleText>{'To get started, first enter your phone, email address or @username'}</TitleText>
            </View>
            <View style={styles.inputContainer}>
              <CustomTextInput
                    placeholder="Phone, email address, or username"
                    onChangeText={handleUsernameChange}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.bottomView}>
                <BottomView 
                  leftBtnTitle={'Forgot Password'} 
                  rightBtnTitle={'Next'}
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

export default UsernameLoginScreen;