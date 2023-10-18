import { useState, useRef, useMemo } from "react";
import { View, FlatList, ScrollView, SafeAreaView} from "react-native";
import styles from "./styles";
import ItemSeparatorView from "../../../components/ui/ItemSeparatorView";
import MessageItem from "../../../components/ui/MessageItem";
import dummyDMData from "../../../../utils/dummyDMData";
import MessageRequest from "../../../components/ui/MessageRequest";
import SearchX from "../../../components/ui/SearchX";
import DMBottomSheet from "./DMBottomSheet";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


function DirectMessages() {

  // ref
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["50%"], []);
    
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };
 
  const openModal = () => {
    bottomSheetModalRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
     <SafeAreaView style={styles.container}>
      <ScrollView>
          <View style={styles.topView}>
            <SearchX placeholder={'Search Direct Messages'} onPress={openModal}/>
          </View>        
          <ItemSeparatorView />
          <MessageRequest message={'Message requests'}/>
          <FlatList
              data={dummyDMData}
              renderItem={({ item }) => <MessageItem dmData={item} />}
              keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
     <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
       <DMBottomSheet />
      </BottomSheetModal>
    </BottomSheetModalProvider>
 );
}

export default DirectMessages;