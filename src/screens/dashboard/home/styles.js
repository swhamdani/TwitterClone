import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  feedItem:{
    flex:1,
    marginTop: 20
  },
  separatorContainer:{
    marginTop: 10
  },
  separator: {
    height: 0.3,
    width: '100%',
    backgroundColor: Colors.darkGreyText, // Color of the separator
    marginVertical: 0, // Adjust the vertical spacing as needed
  },
  tabIndicatorStyle: {
    height: 1,
    backgroundColor: Colors.blueBorder, // Color of the separator
  },
});

export default styles;
