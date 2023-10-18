import { View, FlatList } from "react-native";
import videoData from "../../../../utils/videoData";
import VideoThumbnailItem from "../VideoThumbnailItem";
import styles from "./styles";

const renderItem = ({ item }) => (
    <VideoThumbnailItem thumbnailURL={item.url} />
);

function VideoThumbnailList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={videoData}
                horizontal={true} // Make the FlatList scroll horizontally
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default VideoThumbnailList;