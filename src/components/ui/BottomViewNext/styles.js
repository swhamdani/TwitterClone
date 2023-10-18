import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end', // Align items to the bottom of the container
    alignItems: 'flex-end',
  },
  buttonsOuterContainer: {
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align items to the right side
  },
  buttoncontainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    marginHorizontal: 10, // Adjust the margin as needed
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  lineContainer: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 0.2,
    backgroundColor: Colors.lightGreyBorder,
  },
}); 

export default styles;
