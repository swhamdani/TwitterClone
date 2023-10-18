import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  rootContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    paddingVertical:10,
    paddingHorizontal: 5,
  },
  profilePhotoContainer:{
    paddingHorizontal:10,
    alignItems: 'flex-start',
  },
  searchInputContainer:{
    flex:1,
    justifyContent:'center',
    
  },
  settingContainer:{
    paddingEnd:15,
    alignItems: 'flex-end',
  },
  image: {
    width: 30, 
    height: 30,
    borderRadius: 30/ 2
  },
});

export default styles;
