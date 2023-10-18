import { useState, useEffect} from "react";
import { FlatList, View, Text} from "react-native";
import FeedItem from "../../../components/ui/FeedItem";
import dummyUserProfileData from "../../../../utils/dummyUserProfileData";
import Colors from "../../../constants/colors";
import ItemSeparatorView from "../../../components/ui/ItemSeparatorView";
import styles from "../../primary/styles";


function ForYouScreen() {
//   const [tweets, setTweets] = useState([]);
//   useEffect(() => {
// const client = new TwitterAPI({
//     apiKey: twitterConfig.consumerKey,
//     apiSecret: twitterConfig.consumerSecret,
//     accessToken: twitterConfig.accessToken,
//     accessTokenSecret: twitterConfig.accessTokenSecret,
//   });

//   console.log('Client:', client); // Add this line to check the 'client' object

//   const fetchUserTimeline = async () => {
//     try {
//       const response = await client.get('statuses/user_timeline.json', {
//         screen_name: 'wasif_514',
//       });
//       setTweets(response.data);
//       console.log('Fetched tweets:', response.data);
//     } catch (error) {
//       console.error('Error fetching tweets:', error);
//     }
//   };

//   fetchUserTimeline();
//   }, []);

//   return (
//     <View>
//       <Text>Tweets:</Text>
//       {tweets.map((tweet) => (
//         <Text key={tweet.id}>{tweet.text}</Text>
//       ))}
//     </View>
//   );

  return (
    <View style={styles.container}>
      <ItemSeparatorView />
      <FlatList
        data={dummyUserProfileData}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({ item }) => <FeedItem profileData={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ForYouScreen;