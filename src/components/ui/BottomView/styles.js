import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginBottom: 10
  },
  buttonsOuterContainer: {
    flexDirection: 'row', // Set the direction to row
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttoncontainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 30,
    marginHorizontal: 60,
    marginVertical: 20
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pressed: {
    opacity: 0.50,
  },
  lineContainer:{
    marginTop: 20,
    flexDirection: 'row', 
    paddingHorizontal:10
  },
  line: {
    flex: 1, 
    height: 0.2, 
    backgroundColor: Colors.lightGreyBorder
  },
}); 

export default styles;
