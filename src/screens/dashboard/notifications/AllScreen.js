import { FlatList, View } from "react-native";
import Colors from "../../../constants/colors";
import NotificationItem from "../../../components/ui/NotificationItem";
import ItemSeparatorView from "../../../components/ui/ItemSeparatorView";
import dummyNotifications from "../../../../utils/dummyNotificationsData";
import styles from "../../primary/styles";


function AllScreen() {

  const allNotifications = [
    ...dummyNotifications.all,
    ...dummyNotifications.verified,
    ...dummyNotifications.mentioned,
  ];

    return (
      <View style={styles.container}>
      <ItemSeparatorView />
        <FlatList
          data={allNotifications} // Pass the 'notifications' array here
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) => <NotificationItem notificationData={item} />}
          keyExtractor={(item) => item.id.toString()} // Convert 'id' to a string
        />
      </View>
    );
}

export default AllScreen;