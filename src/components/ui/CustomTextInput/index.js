import {View, TextInput} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';
import useValidateInput from './Hooks/useValidateInput'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomTextInput({placeholder, isIcon, ...restprops}) {
    const { isFocused, handleFocus, handleBlur } = useValidateInput(); // Destructure correctly

    return (
        <View style={styles.container}>
        <TextInput style={[styles.input, isFocused && styles.focusedInput]}
            placeholder={placeholder}
            placeholderTextColor = {Colors.lightGreyText}
            {...restprops}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
         {isIcon && <MaterialCommunityIcons style={styles.icon} name="check-circle" size={20} color={Colors.greenColor}/>}
        </View>

    );
}

export default CustomTextInput;