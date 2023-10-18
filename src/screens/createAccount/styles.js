import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Place content at the top
    backgroundColor: Colors.primaryColor,
  },  
  textInputContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 30,
    backgroundColor: Colors.primaryColor,
  }, 
  signUpcontainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  signupTextInputContainer: {
    marginTop: 20,
    alignItems:'center',
    marginHorizontal: 30,
    backgroundColor: Colors.primaryColor,
  }, 
  signUpBtnContainer:{
      marginHorizontal: 30,
      marginTop: 10
  },
  languageListContainer: {
    flex:1,
    backgroundColor: Colors.primaryColor,
    paddingTop: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    paddingTop: 20,
    paddingHorizontal: 30
  },
  textContainer: {
    marginTop: 5
  },
  image: {
    width: 30,
    height: 30,
  },
  text:{
    fontSize: 16,
    color: Colors.brightGreyText,
    marginBottom: 10,
  },
  bottomView:{
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  signupTextContainer:{
    marginHorizontal:15,
    marginTop: 50
  },
  signupText:{
    fontSize: 14,
    color: Colors.brightGreyText,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  signupTextHighlight:{
    color: Colors.blueBorder,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20
  },
  modalContainer:{
    
  },
  datePickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.primaryColor,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default styles;
