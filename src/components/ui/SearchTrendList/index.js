import { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import SearchTrendsItem from "../SearchTrendsItem";
import trendsData from "../../../../utils/trendsData";
import styles from "./styles";

function SearchTrendList({onSettingIconPress}) {
    const [showAll, setShowAll] = useState(false);
    
    // Slice the data to display only the first 7 items initially
    const displayedData = showAll ? trendsData : trendsData.slice(0, 3);


    // Function to toggle between showing all items and the first 7 items
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedData}
                renderItem={({ item }) => (
                    <SearchTrendsItem
                        trendPlace={item.place}
                        trendTitle={item.title}
                        number={item.number}
                        onPress={onSettingIconPress}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            {!showAll && (
                <TouchableOpacity onPress={toggleShowAll}>
                    <Text style={styles.showMoreText}>Show more</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default SearchTrendList;