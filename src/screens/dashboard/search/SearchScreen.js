import { View, Platform, Text, ScrollView} from "react-native";
import styles from "./styles";
import SearchX from "../../../components/ui/SearchX";
import ItemSeparatorView from "../../../components/ui/ItemSeparatorView";
import SearchTrendList from "../../../components/ui/SearchTrendList";
import VideoThumbnailList from "../../../components/ui/VideosThumbnailList";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../../constants/colors";

const scrollbarStyles =
    Platform.OS === "ios"
      ? { scrollbarWidth: "thin", scrollbarColor: Colors.white }
      : {};

function SearchScreen({navigation}) {

   const handleSettingIconPress = () => {
      // Implement the action you want to perform when the setting icon is pressed.
      console.log('Setting icon pressed');
      // Add your logic here.
      navigation.navigate('SearchSettings');
    };

    const handleTrendSettingPress = () =>{
      console.log('Trend Settings icon pressed');
    }

    return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={[styles.container, scrollbarStyles]} showsVerticalScrollIndicator={true}> 
            <View style={styles.topView}>
               <SearchX placeholder={'Search X'} onPress={handleSettingIconPress}/>
            </View>
            <ItemSeparatorView />
            <View style={styles.trendsContent}>
               <Text style={styles.titleText}>{'Trends for you'}</Text>
               <SearchTrendList trendSettingPress = {handleTrendSettingPress}/>
            </View>
            <ItemSeparatorView />
            <View style={styles.bottomView}>
               <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>{'Videos for you'}</Text>
                  <Text style={styles.text}>Check these popular and trending videos for you</Text>
               </View>
               <VideoThumbnailList />
            </View>
         </ScrollView>
      </SafeAreaView>
    );
}

export default SearchScreen;