import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../containers/Splash';
import SignInScreen from '../containers/SignIn';
import MainScreen from '../containers/Main';
import SettingScreen from '../containers/Setting';
import TrackScreen from '../containers/Track';
import AboutScreen from '../containers/About';
import PolicyScreen from '../containers/Policy';
import { AuthContext } from '../AuthProvider';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const { user } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    (user == null || user == undefined) ? (
                        <>
                            <Stack.Screen name="SignIn" component={SignInScreen} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Main" component={MainScreen} />
                            <Stack.Screen name="Setting" component={SettingScreen} />
                            <Stack.Screen name="Track" component={TrackScreen} />
                            <Stack.Screen name="About" component={AboutScreen} />
                            <Stack.Screen name="Policy" component={PolicyScreen} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default MainNavigator;