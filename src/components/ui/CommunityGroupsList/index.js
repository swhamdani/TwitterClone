import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import CommunityItem from "../CommunityItem";
import communityGroups from "../../../../utils/dummyCommunityGroupsData";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ColorSpace } from "react-native-reanimated";

const renderItem = ({ item }) => (
    <CommunityItem id= {item.id} title={item.title} members={item.members} />
);

function CommunityGroupsList({showList}) {
    console.log(showList);
    const navigation = useNavigation();
    const dataToShow = showList ? communityGroups : communityGroups.slice(0, 3);

    const handleShowMore = ()=>{
        navigation.navigate('SuggestedCommunity', { showFullListValue: true });
    }

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={dataToShow}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            {!showList && (
                <TouchableOpacity onPress={handleShowMore}>
                <Text style={styles.showMoreText}>Show more</Text>
                </TouchableOpacity>
            )}
    </View>
    );
}

export default CommunityGroupsList;