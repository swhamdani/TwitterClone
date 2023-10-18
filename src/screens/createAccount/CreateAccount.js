import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";
import CustomTextInput from "../../components/ui/CustomTextInput";
import TitleText from "../../components/ui/TitleText";
import TopHeader from "../../components/ui/TopHeader";
import BottomView from "../../components/ui/BottomView";
import Colors from '../../constants/colors';
import BottomViewNext from '../../components/ui/BottomViewNext';


function CreateAccount({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState(new Date());
  const [isSignupEnabled, setIsSignupEnabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isEmailValidState, setIsEmailValidState] = useState(false); // Use a different name for the boolean value


  const handleUsernameChange = (text) => {
    console.log(text);
    setUsername(text);
    validateSignupForm(text, email, password, dob);
  };

  const handlePasswordChange = (text) => {
    console.log(text);
    setPassword(text);
    validateSignupForm(username, email, text, dob);
  };

  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateSignupForm(username, text, password, dob);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Hide the date picker
    if (selectedDate) {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set current date to the start of the day
  
      const year2000 = new Date('2010-01-01T00:00:00');
      year2000.setHours(0, 0, 0, 0); // Set to the start of the day
  
      if (selectedDate <= year2000) {
        setDob(selectedDate); // Set as a Date object
        validateSignupForm(username, email, selectedDate);
      } else {
        // Handle the case where a future date is selected or after year 2000
        console.log('Please select a valid date of birth before year 2010.');
      }
    }
  };
  
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const validateSignupForm = (username, email, pwd, date) => {
    const isUsernameValid = username.trim().length >= 5; // Check for minimum length
    const isEmailValidValue = isEmailValid(email); // Use function name isEmailValid
    const isPasswordValid = pwd.trim().length >= 5; // Check for minimum length

    // Check if dob is a Date object and is on or before year 2000
    const currentDate = new Date();
    const year2010 = new Date('2010-01-01T00:00:00');
  
    const isDobValid = date instanceof Date && date <= year2010;

    if(!isDobValid){
      console.log('Please select a valid date of birth before year 2010.');
    }
  
    setIsEmailValidState(isEmailValidValue); // Update the email validity state

    setIsSignupEnabled(isUsernameValid && isEmailValidValue && isPasswordValid && isDobValid);
  };
  

  const handleSignup = async () => {
    try {
      // Check if the signup form is valid
      if (isSignupEnabled) {
        // Perform more secure storage in production using encryption
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('dob', dob.toISOString());
        console.log('Signup successful');
        navigation.navigate('Loading', { targetScreen: 'Signup' });
      } else {
        console.log('Signup form is not valid');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleOnLeftPress = () => {
    navigation.navigate('SelectLanguage');
  }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <SafeAreaView style={styles.container}>          
       <TopHeader />
       <View style={styles.titleContainer}>
        <TitleText>{'Create your account'}</TitleText>
       </View>
      <View  style={styles.textInputContainer}>
        <CustomTextInput
            placeholder="Username"
            value={username}
            onChangeText={handleUsernameChange}
            isIcon={isSignupEnabled}
          />
          <CustomTextInput
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            isIcon={isSignupEnabled}
          />

          <CustomTextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
            isIcon={isSignupEnabled}
          />
          <CustomTextInput
            placeholder="Date of Birth"
            value={dob.toISOString().split('T')[0]} // Format the Date object to a string
            onChangeText={toggleDatePicker}
            isIcon={isSignupEnabled}
          /> 
      </View>
      <View style={styles.bottomView}>
        <BottomViewNext 
          onRightButtonPress={handleSignup}
          rightButtonBGColor={isSignupEnabled ? Colors.white : Colors.disableButtonBG}
          rightButtonTxtColor = {isSignupEnabled ? Colors.black : Colors.darkGreyText}
          disabled={!isSignupEnabled} // Pass the disabled prop
        />
      </View>
      {showDatePicker && (
          <View style={styles.datePickerContainer}>
            <DateTimePicker
              value={dob}
              mode="date"
              display="spinner"
              textColor="white" // Set the text color to white
              onChange={handleDateChange}
            />
          </View>
        )}
    </SafeAreaView>
  </TouchableWithoutFeedback>
    );
}

export default CreateAccount;