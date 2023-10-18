import { View, Text, SafeAreaView } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import styles from './styles';
import Colors from '../../../constants/colors';
import ItemSeparatorView from '../../../components/ui/ItemSeparatorView';
import { useState } from 'react';

function SearchSettings() {

    const [isLocationOn, setIsLocationOn] = useState(true);

    const [isPersonalisationOn, setIsPersonalisationOn] = useState(true);

    const handleLocationToggle = () =>{

        return isLocationOn? setIsLocationOn(false): setIsLocationOn(true);
    }

    const handlePersonalisationToggle = () =>{

        return isPersonalisationOn? setIsPersonalisationOn(false): setIsPersonalisationOn(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topSeparator}>
                <ItemSeparatorView />
            </View>
                <View style={styles.settingsContainer}>
                    <Text style={styles.titleText}>{'Location'}</Text>
                    <Text style={styles.settingText}>{'Show content in this location'}</Text>
                    <View style={styles.toggleView}>
                        <ToggleSwitch
                            isOn={isLocationOn}
                            onColor= {Colors.blueBorder}
                            offColor={Colors.darkGreyText}
                            label={"When this is on, you'll see what's happening\narroud you right now."}
                            labelStyle={styles.toggleText}
                            size='default'
                            containerStyle={styles.toggleContainer} 
                            onToggle={handleLocationToggle}
                        />
                    </View>
                </View>
            <ItemSeparatorView />
            <View style={styles.settingsContainer}>
                    <Text style={styles.titleText}>{'Personalisation'}</Text>
                    <Text style={styles.settingText}>{'Trends for you'}</Text>
                    <View style={styles.toggleView}>
                        <ToggleSwitch
                            isOn={isPersonalisationOn}
                            onColor= {Colors.blueBorder}
                            offColor={Colors.darkGreyText}
                            label={"You can personlise the trends you see based\n on your location and who you follow."}
                            labelStyle={styles.toggleText}
                            size='default'
                            containerStyle={styles.toggleContainer} 
                            onToggle={handlePersonalisationToggle}
                        />
                    </View>
                </View>
        </SafeAreaView>
    );
}

export default SearchSettings;