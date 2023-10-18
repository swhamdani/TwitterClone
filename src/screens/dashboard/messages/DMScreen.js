
import {
  GestureHandlerRootView
} from 'react-native-gesture-handler';
import DirectMessages from "./DirectMessages";
import Colors from '../../../constants/colors';
import { ScrollView } from 'react-native';
import styles from './styles';
function DMScreen() {

    return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: Colors.white}}>
          <DirectMessages />
      </GestureHandlerRootView>
    );
}

export default DMScreen;