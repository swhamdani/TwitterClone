import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  buttonContainer:{
    flex: 1,
    paddingHorizontal: 30,
    justifyContent:'center',
    alignItems: 'flex-start'
  },
  titleContainer:{
    marginBottom: 50
  },
  text: {
    color: Colors.brightGreyText,
    fontSize: 14,
    marginTop: 30,
    marginLeft: 20
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
  bottomText:{
    paddingHorizontal: 30,
    marginBottom: 30
  },
  login_text:{
    color: Colors.blueBorder,
    fontSize: 14,    
    marginTop: 70
  },
  bottomView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20
  }
});

export default styles;
