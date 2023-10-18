import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  innerContainer:{
    borderRadius: 20,
    overflow: 'hidden', // Add this to clip the border
  },
  thumbnail: {
    justifyContent:'center',
    alignItems: 'center',
    width: 200, // Set a fixed width for the Thumbnail
    height: 300 * 0.95, // Maintain the aspect ratio for more height
  },
  viewsCountRow:{
    position: 'absolute', // Position the count row absolutely within the thumbnailContainer
    bottom: 50, // Adjust the position as needed
    left: 10, // Adjust the position as needed
    width:80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.viewsCountBGColor, // Add a background color for readability
    borderRadius:10,
    padding: 7,
  },
  text:{
    color: Colors.white,
    paddingLeft: 10,
    fontSize: 16,
  }
});

export default styles;
