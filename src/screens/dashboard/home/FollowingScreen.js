import { FlatList, View } from "react-native";
import FeedItem from "../../../components/ui/FeedItem";
import dummyUserProfileData from "../../../../utils/dummyUserProfileData";
import ItemSeparatorView from "../../../components/ui/ItemSeparatorView";
import styles from "./styles";

function FollowingScreen() {

    return (
      <View style={styles.container}>
      <ItemSeparatorView />
        <FlatList
          data={dummyUserProfileData}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) => <FeedItem profileData={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
}

export default FollowingScreen;