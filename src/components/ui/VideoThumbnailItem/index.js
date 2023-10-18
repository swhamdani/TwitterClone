import { View, Text } from "react-native";
import { Thumbnail } from 'react-native-thumbnail-video';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from "../../../constants/colors";
import styles from "./styles";

function VideoThumbnailItem({thumbnailURL}) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Thumbnail style={styles.thumbnail} url={thumbnailURL} />
                <View style={styles.viewsCountRow}>
                    <MaterialIcons style={styles.icon} 
                            name= {"visibility"} 
                            size={20} 
                            color={Colors.white}
                        />
                    <Text style={styles.text}>112K</Text>
                </View>
            </View>
        </View>
    );
}

export default VideoThumbnailItem;