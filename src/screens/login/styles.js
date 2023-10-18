import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  titleContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: 15
  },
  buttonsOuterContainer: {
    flexDirection: 'row', // Set the direction to row
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttoncontainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    marginHorizontal: 50,
    marginVertical: 20
  },
  inputContainer:{
    flex: 1,
    alignItems:'center',
    marginHorizontal: 20,
    backgroundColor: Colors.primaryColor,
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
    height: 0.5, 
    backgroundColor: Colors.lightGreyBorder
  },
  bottomView:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems:'center',
  },
}); 

export default styles;
