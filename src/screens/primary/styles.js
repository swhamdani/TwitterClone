import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  text:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 20,
    marginBottom: 100,
  }
});

export default styles;
