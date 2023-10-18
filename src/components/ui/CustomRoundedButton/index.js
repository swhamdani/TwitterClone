import {Pressable, View, Text, Image} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';
import IMAGES from '../../../constants/Images';


function CustomRoundedButton({children, onPress, image}) {

    return (
        <View style={styles.buttonOutercontainer}>
          <Pressable
            style={({ pressed }) =>[styles.buttonInnercontainer({ image }),  pressed && styles.pressed]}
            onPress={onPress}
            android_ripple={{ color: Colors.primaryColor}}
          >
          {image && <Image source={IMAGES.googleIcon} style={styles.icon} />}
          <Text style={styles.buttonText({ image })}>{children}</Text>
        </Pressable>
      </View>
    );
}

export default CustomRoundedButton;