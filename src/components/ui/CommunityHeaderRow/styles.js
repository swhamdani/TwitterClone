import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  rootContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:5
  },
  profilePhotoContainer:{
    paddingHorizontal:15,
  },
  titleContainer:{
    flex:1,
    paddingHorizontal:20,
  },
  addCommnityIcon:{
    paddingLeft: 20,
    paddingTop: 5
  },
  searchIcon:{
    paddingTop: 5
  },
  iconsContainer:{
    flexDirection: 'row',
    marginHorizontal:20
  },
  text:{
    fontSize: 22,
    color: 'white',
    fontWeight:'bold',
    paddingVertical: 10
  },
  image: { 
    width: 30, 
    height: 30,
    borderRadius: 30/2
  },
});

export default styles;
