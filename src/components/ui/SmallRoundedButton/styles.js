import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  buttonOutercontainer: {
    height: 40,
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonInnercontainer: (isEnabled) =>({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isEnabled ? Colors.white : Colors.disableButtonBG,
  }),
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.50,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 2,
  },
});

export default styles;
