import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 10,
  },
  innerContainer:{
    paddingLeft: 10
  },
  viewsCountRow:{
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: Colors.viewsCountBGColor
  },
  text:{
    color: Colors.white,
    fontSize: 16,
  }
});

export default styles;
