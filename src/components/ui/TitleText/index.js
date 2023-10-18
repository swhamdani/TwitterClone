import { View, Text } from "react-native";
import styles from "./styles";

function TitleText({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default TitleText;