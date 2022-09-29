import * as React from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import { styles } from './styles';

const SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>{'Shake n Wipe'}</Text>
        </SafeAreaView>
    );
};

export default SplashScreen;