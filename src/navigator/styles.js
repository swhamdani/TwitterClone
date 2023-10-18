import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: Colors.primaryColor,
  },
  text:{
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  idText:{
    color: Colors.brightGreyText,
    fontSize: 16,
  }
}); 

export default styles;
