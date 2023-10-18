import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.lightGreyText,
    backgroundColor: Colors.searchBGColor,
    borderWidth: 0.2,
    borderRadius: 35,
    marginLeft: 10,
    marginRight: 20,
  },
  input:{
      width: '90%',
      height: 40, 
      fontSize: 16,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      color: Colors.blueText
  },

  focusedInput: {
    borderColor: Colors.blueBorder,
    color: Colors.blueText,
  },
});

export default styles;
