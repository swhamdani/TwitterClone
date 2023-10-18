import { View, Image, Text, SafeAreaView} from "react-native";
import styles from "./styles";
import ItemSeparatorView from "../../../components/ui/ItemSeparatorView";
import CommunityGroupsList from "../../../components/ui/CommunityGroupsList";
import CommunityHeaderRow from "../../../components/ui/CommunityHeaderRow";

function CommunityScreen() {

    return (
    <SafeAreaView style={styles.container}>    
        <CommunityHeaderRow />
        <ItemSeparatorView />
        <CommunityGroupsList showList={false}/>
        <ItemSeparatorView />
    </SafeAreaView>
    );
}

export default CommunityScreen;