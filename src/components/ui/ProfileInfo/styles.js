import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  rootContainer:{
    flexDirection: 'row',
    paddingVertical:10,
  },
  profilePhotoContainer:{
    paddingHorizontal:10,
    alignItems: 'flex-start',
  },
  userContainer:{
    flex:1,
    flexDirection: 'row',
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
    width: 50, 
    height: 50,
    borderRadius: 50/ 2
  },
});

export default styles;
