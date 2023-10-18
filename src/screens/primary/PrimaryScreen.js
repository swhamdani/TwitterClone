import { View, Image, Text, SafeAreaView} from "react-native";
import styles from "./styles";
import CustomTextInput from "../../components/ui/CustomTextInput";
import TitleText from "../../components/ui/TitleText";
import TopHeader from "../../components/ui/TopHeader";
import RoundedCornerTextInput from "../../components/ui/RoundedCornerTextInput";

function PrimaryScreen({navigation}) {

  // navigation.setOptions({
  //   headerShown: false, // Hide the default header
  // });

  const handleGoBack = () => {
    navigation.goBack();
  };

    return (
    <SafeAreaView style={styles.container}>          
       <TopHeader onBackPress={handleGoBack} />
      <TitleText>{'Create your account'}</TitleText>
      <CustomTextInput
        placeholder="Name"
        onChangeText={(text) => console.log(text)}
      />
      <CustomTextInput
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => console.log(text)}
      />
      <CustomTextInput
        placeholder="Date of Birth"
        onChangeText={(text) => console.log(text)}
      />    
    </SafeAreaView>
    );
}

export default PrimaryScreen;