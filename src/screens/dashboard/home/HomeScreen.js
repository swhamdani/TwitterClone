import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import TopHeader from "../../../components/ui/TopHeader";
import HomeScreenTabNavigator from "../../../navigator/HomeScreenTabNavigator";

const ItemSeparatorView = () => {
  return (
    <View style={styles.separator}/>
  );
};

function HomeScreen() {

    return (
      <SafeAreaView style={styles.container}>  
          <TopHeader />
          <View style={styles.separatorContainer}>
            <ItemSeparatorView />
          </View>
          <HomeScreenTabNavigator />
      </SafeAreaView>
    );
}

export default HomeScreen;