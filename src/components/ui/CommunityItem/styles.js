import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  rootContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  profilePhotoContainer:{
    padding:10,
  },
  titleContainer:{
    paddingHorizontal:10,
  },
  itemsContainer:{
    flex:1,
  },
  addCommnityIcon:{
    paddingLeft: 15
  },
  iconsContainer:{
    flexDirection: 'row',
    marginHorizontal:10,
    paddingTop:10
  },
  titleText:{
    fontSize: 18,
    fontWeight:'bold',
    color: 'white',
  },
  text:{
    fontSize: 14,
    color: 'white',
    paddingVertical: 5
  },
  communityImage:{
    width: 100, 
    height: 100,
    borderRadius: 15
  },

  image: {
    width: 30, 
    height: 30,
    borderRadius: 30/2,
    marginRight:-5,
  },
});

export default styles;
