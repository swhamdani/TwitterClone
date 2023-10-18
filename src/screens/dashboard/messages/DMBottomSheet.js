import { View, FlatList, Text, SafeAreaView} from "react-native";
import styles from "./styles";
import DMBottomSheetList from "../../../components/ui/DMBottomSheetList";
function DMBottomSheet() {

    return (
    <SafeAreaView style={styles.container}>  
      <DMBottomSheetList />
    </SafeAreaView>
    );
}

export default DMBottomSheet;