import { StyleSheet, Platform} from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    paddingTop: Platform.OS === 'android'? 10 : 0
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default styles;
