import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/colors';
const styles = StyleSheet.create({
  rootContainer:{
    flexDirection: 'row',
    paddingVertical:10,
  },
  profilePhotoContainer:{
    paddingHorizontal:10,
    alignItems: 'flex-start',
  },
  iconContainer:{
    flex:1,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  dot:{
    paddingTop:3,
    justifyContent: 'flex-start'
  },
  settingContainer:{
    flex:1,
    paddingEnd:5,
    alignItems: 'flex-end',
  },
  username: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors.white,
      paddingRight: 10
  },
  text: {
    fontSize: 16,
    color: Colors.brightGreyText,
  },
  image: {
    width: 30, 
    height: 30,
    borderRadius: 30/ 2
  },
});

export default styles;
