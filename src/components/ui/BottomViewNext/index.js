import {View, Pressable, Text} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';


function BottomViewNext({ onRightButtonPress, rightButtonBGColor, rightButtonTxtColor }) {
    return (
      <View style={styles.container}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        <View style={styles.buttonsOuterContainer}>
        <View style={styles.buttonRow}>
          <Pressable
            style={[
              styles.buttoncontainer,
              { backgroundColor: rightButtonBGColor },
            ]}
            onPress={onRightButtonPress}>
            <Text style={[styles.buttonText, { color: rightButtonTxtColor }]}>Next</Text>
          </Pressable>
        </View>
        </View>
      </View>
    );
  } 

export default BottomViewNext;