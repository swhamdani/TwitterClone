import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  rootContainer:{
    flexDirection: 'row',
    paddingVertical:15,
  },
  profilePhotoContainer:{
    paddingHorizontal:10,
    alignItems: 'flex-start',
  },
  userContainer:{
    flex:1,
    flexDirection: 'row',
    marginLeft: 10
  },
  text: {
    fontSize: 16,
    color: Colors.white,
  },
});

export default styles;
