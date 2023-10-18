import {TextInput, View} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the correct icon library
import useValidateInput from './Hooks/useValidateInput'; 


function RoundedCornerTextInput({placeholder, ...restprops}) {
    const { isFocused, handleFocus, handleBlur } = useValidateInput(); // Destructure correctly

    return (
        <View style={styles.container}>
            <TextInput style={[styles.input, isFocused && styles.focusedInput]}
                placeholder={placeholder}
                placeholderTextColor = {Colors.brightGreyText}
                fontSize= {16}                
                {...restprops}
                onFocus={handleFocus} 
                onBlur={handleBlur}
            />
        </View>
    );
}

export default RoundedCornerTextInput;