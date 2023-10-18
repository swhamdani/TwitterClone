import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  topView:{
    paddingTop: 1,
  },
  listContainer: {
    padding:1
  },
  modalContainer: {
    flex:1,
    backgroundColor: Colors.primaryColor, // Semi-transparent background
    justifyContent: 'flex-end', // Modal slides from bottom 
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
  bottomSheetHeader: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  bottomSheetHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomSheet: { 
    paddingBottom: 50
  },
  closeButton: {
    backgroundColor: 'gray',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
