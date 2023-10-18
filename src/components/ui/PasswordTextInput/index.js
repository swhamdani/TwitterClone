import {View, TextInput, Pressable} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';
import useValidatePassword from './Hooks/useValidatePassword'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function PasswordTextInput({placeholder, isVisible, toggleVisibility, isIcon, ...restprops}) {
    const { isFocused, handleFocus, handleBlur } = useValidatePassword(); // Destructure correctly

    return (
        <View style={styles.container}>
        <TextInput style={[styles.input, isFocused && styles.focusedInput]}
            placeholder={placeholder}
            placeholderTextColor = {Colors.lightGreyText}
            {...restprops}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
         <MaterialIcons style={styles.icon} 
            name= {isVisible? "visibility" : "visibility-off"} 
            size={20} 
            color={Colors.disableButtonBG}
            onPress={toggleVisibility} 
            />
         {isIcon && <MaterialCommunityIcons style={styles.icon} name="check-circle" size={20} color={Colors.greenColor}/>}
        </View>

    );
}

export default PasswordTextInput;