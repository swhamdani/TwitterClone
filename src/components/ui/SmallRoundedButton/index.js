import {Pressable, View, Text, Image} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';
import useEnableButton from './Hooks/useEnableButton';


function SmallRoundedButton({ isEnabled, children }) {
  const { enable, handleEnable, handleDisable } = useEnableButton(); // Destructure correctly

    return (
        <View style={styles.buttonOutercontainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.buttonInnercontainer({isEnabled}), styles.pressed,]
              : styles.buttonInnercontainer({isEnabled})
          }
          android_ripple={{ color: Colors.primaryColor}}
        >
          <Text style={styles.buttonText}>{children}</Text>
          onEnable={handleEnable}
          onDisable={handleDisable}
        </Pressable>
      </View>
    );
}

export default SmallRoundedButton;