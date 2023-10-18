import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
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
  buttonContainer:{
    flex: 1,
    marginTop: 150,
    paddingHorizontal: 20
  },
  text: {
    color: Colors.brightGreyText,
    fontSize: 14,
    marginTop: 30
  },
  lineContainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal:10
  },
  line: {
    flex: 1, 
    height: 1, 
    backgroundColor: Colors.lightGreyBorder
  },
  lineText: {
    width: 30, 
    textAlign: 'center', 
    color: Colors.lightGreyText
  },
  titleTextContainer:{
    marginTop:150,
    marginHorizontal: 20
  },
  bottomText:{
    paddingHorizontal: 30,
    marginBottom: 30
  },
  login_text:{
    color: Colors.blueBorder,
    fontSize: 16,    
    marginTop: 70
  },
  loginButton:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20
  }
});

export default styles;
