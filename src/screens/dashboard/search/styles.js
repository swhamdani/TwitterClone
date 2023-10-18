import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  topView:{
    paddingTop: 1,
  },
  topSeparator:{
    marginTop:5
  },
  titleContainer:{
    paddingLeft: 20
  },
  trendsContent:{
    flex:1,
    paddingLeft: 20
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    paddingTop: 10
  },
  text:{
    fontSize: 16,
    paddingTop:5,
    paddingBottom: 10,
    color: Colors.brightGreyText
  },
  toggleText:{
    fontSize: 14,
    paddingTop:-5,
    paddingBottom: 10,
    color: Colors.brightGreyText
  },
  toggleContainer: {
    paddingVertical: 10, // Adjust the padding as needed
    paddingHorizontal: 30, // Adjust the padding as needed
  },
  settingsContainer:{
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  toggleView:{
    marginTop: -10,
    marginLeft: -10,
    marginRight: -20
  },
  settingText:{
    fontSize: 16,
    paddingTop:30,
    paddingBottom: 10,
    color: Colors.white
  },
  bottomView:{
    flex:1,
    marginTop:10,
    justifyContent: 'flex-end',
    alignItems:'flex-start',
    paddingBottom: 50
  },
});

export default styles;
