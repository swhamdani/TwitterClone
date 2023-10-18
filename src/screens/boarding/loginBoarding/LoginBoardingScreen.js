import { View, Image, Text, SafeAreaView} from "react-native";
import styles from './styles';
import CustomRoundedButton from "../../../components/ui/CustomRoundedButton";
import TitleText from "../../../components/ui/TitleText";
import TopHeader from "../../../components/ui/TopHeader";

function LoginBoardingScreen({navigation}) {
    
    // navigation.setOptions({
    //     headerShown: false, // Hide the default header
    // });

    function onPressHandler(){
        navigation.navigate('UsernameLogin');
    }

    return (
        <SafeAreaView style={styles.container}>          
            <TopHeader />
            <View style={styles.buttonContainer}>
                <View style={styles.titleContainer}>
                    <TitleText>{'Welcome back! Log \nin to see the latest.'}</TitleText>
                </View>
                <CustomRoundedButton children={'Continue with Google'} onPress={onPressHandler} image={true}/>
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                            <View>
                                <Text style={styles.lineText}>or</Text>
                            </View>
                        <View style={styles.line}  />
                    </View>
                <CustomRoundedButton children={'Log in'} onPress={onPressHandler} image={false}/>
            </View>
            <View style={styles.bottomView}>
                <Text style={[styles.text, {marginTop: 70}]}>Don't have an account?</Text>
                <Text  onPress={() => navigation.navigate('Loading', { targetScreen: 'Boarding' })}
                        style={[styles.login_text, { marginHorizontal: 5 }]}>Sign up</Text>
            </View>
        </SafeAreaView>
    );
}

export default LoginBoardingScreen;