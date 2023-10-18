import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  rootContainer:{
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 15,
    marginRight: 10
  },
  innerContainer:{
    flexDirection:'row',
    paddingLeft: 25,
    paddingRight: 20
  },
  row:{
    flexDirection: 'row',
  },
  rowIcon:{
      alignItems: 'flex-start',
  },
  icon:{
    paddingHorizontal:20,
    alignItems: 'flex-start',
  },
  shareIcon:{
    marginLeft: Platform.OS === 'ios'? -7:-10,
    paddingTop: 5
  },
  text: {
    fontSize: 14,
    paddingTop:4,
    color: Colors.brightGreyText,
  },
});

export default styles;
