import {View, Pressable, Text} from 'react-native';
import Colors from '../../../constants/colors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function BottomView({onLeftButtonPress, onRightButtonPress, rightButtonBGColor, rightButtonTxtColor, rightBtnTitle, leftBtnTitle}) {

    return (
        <View>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
            </View>
            <View style={styles.buttonsOuterContainer}>
                <Pressable
                    style={[
                        styles.buttoncontainer,
                        { backgroundColor: Colors.primaryColor, borderColor: Colors.white, borderWidth: 1 },
                    ]}
                    onPress={onLeftButtonPress}
                    >
                    <Text style={[styles.buttonText, { color: Colors.white }]}>{leftBtnTitle}</Text>
                </Pressable>
                <Pressable
                    style={[
                        styles.buttoncontainer,
                        { backgroundColor: rightButtonBGColor },
                    ]}
                    onPress={onRightButtonPress}
                    >
                    <Text style={[styles.buttonText, { color: rightButtonTxtColor }]}>{rightBtnTitle}</Text>
                </Pressable>
            </View>  
        </View>
    );
}

export default BottomView;