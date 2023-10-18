// LanguageList.js
import React, {useState} from 'react';
import { View, Text, ScrollView} from 'react-native';
import TitleText from '../../components/ui/TitleText';
import RoundedCornerTextInput from '../../components/ui/RoundedCornerTextInput';
import BottomView from '../../components/ui/BottomView';
import styles from './styles';
import TopHeader from '../../components/ui/TopHeader';
import LanguageList from '../../components/ui/LanguageList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/colors';

function SelectLanguage({navigation}){
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [isSelected, setIsSelected] = useState(false);

    const handleOnNextPress = () => {
        if(isSelected){
            console.log('First select a language.');
            navigation.navigate('Loading', { targetScreen: 'CreateAccount' });
        }
      };
      
    const handleSkipNow = () => {
        //navigation.navigate('Boarding');
        navigation.navigate('Loading', { targetScreen: 'CreateAccount' });
    }

    const handleLanguagesSelected = (selectedLanguages) => {
        setSelectedLanguages(selectedLanguages);
        setIsSelected(selectedLanguages.length > 0); // Set isSelected based on selectedLanguages length
    };

    const handleSubmission = () => {
        if (selectedLanguages.length > 0) {
          const selectedIds = selectedLanguages.map((language) => language.id);
          const selectedNames = selectedLanguages.map((language) => language.name);
          console.log('Selected IDs:', selectedIds);
          console.log('Selected Names:', selectedNames);
          // Perform further actions based on selected languages, e.g., navigation
          navigation.navigate('Loading', { targetScreen: 'CreateAccount' });
        } else {
          console.log('No language selected, Please select at least one language.');
          // Show an error message to the user or handle the case where no language is selected
        }
      };

  return (
    <SafeAreaView style={styles.container}>
        <TopHeader />
        <View style={styles.titleContainer}>
            <TitleText>{'Select your language(s)'}</TitleText>
            <Text style={styles.text}>Select the language(s) you want to use to personalise you X experience.</Text>
        </View>
        <RoundedCornerTextInput
            placeholder="Search languages"
            onChangeText={(text) => console.log(text)}/>
        <View style={styles.languageListContainer}>
            <LanguageList onLanguagesSelected={handleLanguagesSelected}/>
        </View>
        <View style={styles.bottomView}>
            <BottomView   onLeftButtonPress={handleSkipNow}
                onRightButtonPress={handleSubmission}
                leftBtnTitle={'Skip for now'}
                rightBtnTitle={'Next'}
                rightButtonBGColor={isSelected ? Colors.white : Colors.disableButtonBG}
                rightButtonTxtColor={isSelected ? Colors.black : Colors.darkGreyText}
                disabled={!isSelected} // Pass the disabled prop
            />
        </View>
    </SafeAreaView>
  );
};

export default SelectLanguage;
