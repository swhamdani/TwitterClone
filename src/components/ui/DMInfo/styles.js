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
    paddingTop:5,
    justifyContent: 'flex-start',
    paddingHorizontal: 5
  },
  settingContainer:{
    flex:1,
    alignItems: 'flex-end',
    paddingEnd: 15
  },
  username: {
      fontSize: 16,
      fontWeight: "bold",
      color: Colors.white,
      paddingRight: 10
  },
  text: {
    fontSize: 14,
    color: Colors.brightGreyText,
  },
  image: {
    width: 50, 
    height: 50,
    borderRadius: 50/ 2
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default styles;
