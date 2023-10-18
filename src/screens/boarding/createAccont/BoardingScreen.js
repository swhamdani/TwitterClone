import { useState } from 'react';
import { View, Text, SafeAreaView, Button, Modal} from "react-native";
import styles from './styles';
import CustomRoundedButton from "../../../components/ui/CustomRoundedButton";
import TitleText from "../../../components/ui/TitleText";
import TopHeader from "../../../components/ui/TopHeader";
function BoardingScreen({navigation}) {

    const [isModalVisible, setModalVisible] = useState(false);
    // navigation.setOptions({
    //     headerShown: false, // Hide the default header
    // });

    const openModal = () => {
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);``
      };

    function onPressHandler(){
        navigation.navigate('Loading', { targetScreen: 'SelectLanguage' });
    }

    return (
        <SafeAreaView style={styles.container}>          
            <TopHeader />
            <View style={styles.titleTextContainer}>
                <TitleText>{'See what\'s \nhappening in the \nworld right now.'}</TitleText>
            </View>
            <View style={styles.buttonContainer}>
                <CustomRoundedButton children={'Continue with Google'} onPress={openModal} image={true}/>
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                            <View>
                                <Text style={styles.lineText}>or</Text>
                            </View>
                        <View style={styles.line}  />
                    </View>
                <CustomRoundedButton children={'Create account'} onPress={onPressHandler} image={false}/>
                <View style={styles.loginButton}>
                    <Text style={styles.text}>By signing up, you agree to our <Text style={styles.login_text}>Terms</Text>, <Text style={styles.login_text}>Privacy Policy</Text> and 
                    <Text style={styles.login_text}> Cookie Use</Text>.</Text>
                </View>
                <View style={styles.loginButton}>
                    <Text style={[styles.text, {marginTop: 70}]}>Have an account already?</Text>
                    <Text  onPress={() => navigation.navigate('Loading', { targetScreen: 'LoginBoarding' })}
                        style={[styles.login_text, { marginHorizontal: 5 }]}>Log in</Text>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default BoardingScreen;