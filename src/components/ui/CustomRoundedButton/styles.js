import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  buttonOutercontainer: {
    width: "100%",
    height: 45,
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonInnercontainer: () => ({
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Center both vertically and horizontally
    backgroundColor: Colors.white,
  }),
  buttonText: () => ({
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
  }),
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
