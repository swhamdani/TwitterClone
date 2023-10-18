import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';
import useAccountNavigations from './Hooks/useAccountNavigations'; 


function CustomDrawerContent() {
    const { handleSignupPress, handleLoginPress } = useAccountNavigations(); // Destructure correctly

    return (
        <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {backgroundColor: Colors.primaryColor}]} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor: Colors.blueBorder}]} onPress={handleSignupPress}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomDrawerContent;