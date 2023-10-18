import {Pressable, View, Text, Image} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';
import IMAGES from '../../../constants/Images';


function CustomRoundedButtonBG({children, onPress, bgColor, txtColor,image}) {

    return (
        <View style={styles.buttonOutercontainer}>
          <Pressable
            style={({ pressed }) =>[styles.buttonInnercontainer,  pressed && styles.pressed]}
            onPress={onPress}
            android_ripple={{ color: Colors.primaryColor}}
          >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    );
}

export default CustomRoundedButtonBG;