import { View, Image, Text, SafeAreaView} from "react-native";
import styles from "./styles";
import ItemSeparatorView from "../../../components/ui/ItemSeparatorView";
import CommunityGroupsList from "../../../components/ui/CommunityGroupsList";
import { useRoute } from '@react-navigation/native'; // Import useRoute from react-navigation/native


function SuggestedCommunitiesScreen() {
    const route = useRoute(); // Use useRoute to access route.params
    const showList = route.params?.showFullListValue || false;

    console.log(''+showList);

    return (
    <SafeAreaView style={styles.container}>    
        <ItemSeparatorView />
        <CommunityGroupsList showList={showList}/>
        <ItemSeparatorView />
    </SafeAreaView>
    );
}

export default SuggestedCommunitiesScreen;