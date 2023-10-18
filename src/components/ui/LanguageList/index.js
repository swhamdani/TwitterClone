import React, { useState } from "react";
import { TouchableOpacity, Text, FlatList, View} from "react-native";
import languagesData from "../../../../utils/languagesData";
import Checkbox from '../Checkbox';
import styles from "./styles";
function LanguageList({ onLanguagesSelected }) {
  const [languages, setLanguages] = useState(languagesData);
  const [showAllLanguages, setShowAllLanguages] = useState(false);

  const renderLanguage = ({ item }) => (
    <Checkbox
      title={item.name}
      isChecked={item.checked}
      onPress={() => handleChange(item)}
    />
  );

  const handleChange = (selectedLanguage) => {
    const newLanguages = languages.map((language) => {
      if (language.id === selectedLanguage.id) {
        return { ...language, checked: !language.checked };
      } else {
        return language;
      }
    });
    setLanguages(newLanguages);
  
    // Call the callback here to update selectedLanguages in the parent component
    onLanguagesSelected(newLanguages.filter(language => language.checked));
  };
  
  
  const renderLanguages = showAllLanguages ? languages : languages.slice(0, 2);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={renderLanguages}
          renderItem={renderLanguage}
          keyExtractor={(item) => item.id.toString()} // Assuming each language has a unique id
        />
      </View>

      {!showAllLanguages && (
        <TouchableOpacity onPress={() => setShowAllLanguages(true)}>
          <Text style={styles.showMoreText}>Show more</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LanguageList;
