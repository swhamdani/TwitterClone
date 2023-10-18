import { SafeAreaView, View } from "react-native";
import TopHeader from "../../../components/ui/TopHeader";
import ItemSeparatorView from "../../../components/ui/ItemSeparatorView";
import NotificationsTabNavigator from "../../../navigator/NotificationsTabNavigator";
import styles from "./styles";

function NotificationsScreen() {
  return (
      <SafeAreaView style={styles.container}>  
          <TopHeader />
          <View style={styles.separatorContainer}>
            <ItemSeparatorView />
          </View>
          <NotificationsTabNavigator />

      </SafeAreaView>
  );
}

export default NotificationsScreen;