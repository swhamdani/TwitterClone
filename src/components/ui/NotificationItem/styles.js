import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    marginBottom: 10,
    marginRight: 10
  },
  topRowContainer: {
    flexDirection: "row",
  },
  imageContainer:{
    paddingLeft:10,
  },
  twitterFeedContainer:{
    flex:1,
    paddingHorizontal:10,
  },
  feedTextContainter:{
    marginBottom: 20
  },
  image: {
    width: 50, 
    height: 50,
    borderRadius: 50/ 2
  },
  infoContainer:{
    flex:1,
  },
  text: {
    fontSize: 16,
    color: Colors.white,
    marginLeft:60,
    marginTop: -5,
    marginRight: 10
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default styles;
