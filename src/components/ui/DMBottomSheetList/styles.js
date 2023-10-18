import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "600",
  },
  listContainer:{
    marginRight: 20
  },
  list: {
    margin: 10,
  },
  languageItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align content on the left
  },
  languageText: {
    fontSize: 25,
    color: 'white',
  },
  showMoreText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default styles;
