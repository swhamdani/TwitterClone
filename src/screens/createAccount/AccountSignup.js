import {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, Modal} from "react-native";
import styles from "./styles";
import CustomTextInput from "../../components/ui/CustomTextInput";
import TitleText from "../../components/ui/TitleText";
import TopHeader from "../../components/ui/TopHeader";
import CustomRoundedButtonBG from '../../components/ui/CustomRoundedButtonBG';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

function AccountSignup({navigation}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    // Fetch values from AsyncStorage and update state
    const fetchStoredData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('username');
        const storedPassword = await AsyncStorage.getItem('email');
        const storedDob = await AsyncStorage.getItem('dob');

        if (storedName) setName(storedName);
        if (storedPassword) setPassword(storedPassword);
        if (storedDob) {
          const dobDate = new Date(storedDob); // Convert the stored ISO 8601 string to Date object
          setDob(dobDate.toISOString().split('T')[0]); // Format the Date object for display
        }
      } catch (error) {
        console.error('Error fetching stored data:', error);
      }
    };

    fetchStoredData();
  }, []);

  const handleOnNextPress = () => {
    navigation.navigate('Loading', { targetScreen: 'Dashboard' });
  };

    return (
    <SafeAreaView style={styles.signUpcontainer}>          
       <TopHeader />
       <View style={styles.titleContainer}>
        <TitleText>{'Create your account'}</TitleText>
       </View>

      <View  style={styles.signupTextInputContainer}>
      <CustomTextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          isIcon={true}
        />
        <CustomTextInput
          placeholder="Email"
          value={password}
          onChangeText={(text) => setPassword(text)}
          isIcon={true}
        />
        <CustomTextInput
          placeholder="Date of Birth"
          value={dob}
          onChangeText={(text) => setDob(text)}
          isIcon={true}
        />
      </View>
      <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>By signing up, you agree to the <Text style={styles.signupTextHighlight}>Terms of Service</Text> and Privacy Policy, including 
          <Text style={styles.signupTextHighlight}> Cookie Use</Text>. Twitter may use your personal information for purposes outlined in our Privacy Policy,
          like keeping your account secure and personalising our services, including ads. <Text style={styles.signupTextHighlight}> Learn more</Text>. 
          Others will be able to find you by email or phone number, when provided, unless you choose otherwise<Text style={styles.signupTextHighlight}> here</Text>.</Text>
      </View>
      <View style={styles.signUpBtnContainer}>
        <CustomRoundedButtonBG children={'Sign up'} onPress={handleOnNextPress} image={false}/>
      </View>
    </SafeAreaView>
    );
}

export default AccountSignup;