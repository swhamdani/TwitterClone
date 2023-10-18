import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: Colors.lightGreyBorder,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  input:{
    flex:1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: Colors.white,
  },
  focusedInput: {
    borderColor: Colors.blueBorder,
    color: Colors.blueText,
  },
  icon: {
    padding: 15,
}, 
});

export default styles;
