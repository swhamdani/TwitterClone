import React from "react";
import { FlatList, View} from "react-native";
import DMBottomSheetItem from "../DMBottomSheetItem";
import styles from "./styles";
import ItemSeparatorView from "../ItemSeparatorView";

function DMBottomSheetList() {

  const data = [
    { name: "unfollow", title: "Unfollow @ahmad1" },
    { name: "add-to-list", title: "Add/Remove from Lists" },
    { name: "mute", title: "Mute @ahmad1" },
    { name: "leave", title: "Leave this conversation" },
    { name: "add-to-circle", title: "Add to Circle" },
    { name: "block", title: "Block @ahmad1" },
    { name: "report", title: "Report post" },
  ];


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DMBottomSheetItem name={item.name} title={item.title} />
        )}
      />
    </View>
  );
};

export default DMBottomSheetList;
