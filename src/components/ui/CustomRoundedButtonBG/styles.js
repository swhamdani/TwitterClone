import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  buttonOutercontainer: {
    width: "100%",
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonInnercontainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Center both vertically and horizontally
    backgroundColor: Colors.blueBorder,
  },
  buttonText:{
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: "center",
  },
  pressed: {
    opacity: 0.50,
  },
});

export default styles;
