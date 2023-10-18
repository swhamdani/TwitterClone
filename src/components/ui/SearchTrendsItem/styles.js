import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    paddingVertical: 20
  },
  leftView:{
    flexDirection: 'row'
  },
  profilePhotoContainer:{
    alignItems: 'flex-start',
  },
  settingContainer:{
    flex:1,
    paddingEnd:10,
    alignItems: 'flex-end',
  },
  trendsView:{
    paddingLeft: 5
  },
  trendName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    paddingTop:5,
    paddingBottom:5
  },
  trendText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.brightGreyText,
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
});

export default styles;
