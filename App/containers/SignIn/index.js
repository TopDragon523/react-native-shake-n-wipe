import React, { useState } from 'react';
import {
    View,
    Text
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinkButton from '../../components/LinkButton';
import OutlineButton from '../../components/OutlineButton';
import { styles } from './styles';
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import { scale } from '../../utils/scale';

const SignInScreen = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Header
                title={'Login to Shake n Wipe'}
            />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={styles.containerInner}>
                    <View style={styles.loginMessageWrapper}>
                        <Text style={styles.loginMessage}>
                            {'Please enter Name, Email and Password'}
                        </Text>
                    </View>
                    <View style={styles.inputForm}>
                        <TextField
                            value={userName}
                            label={'Name'}
                            onChangeText={(v) => setUserName(v)}
                        />
                        <View style={styles.divider} />
                        <TextField
                            value={email}
                            label={'Email'}
                            onChangeText={(v) => setEmail(v)}
                        />
                        <View style={styles.divider} />
                        <TextField
                            value={password}
                            label={'Password'}
                            onChangeText={(v) => setPassword(v)}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.loginWrapper}>
                        <OutlineButton
                            title="CONTINUE"
                            loading={false}
                            onPress={() => {
                                navigation.navigate('Main');
                                // login(userName, password);
                            }}
                        />
                        <View style={styles.continueMessageWrapper}>
                            <Text style={{
                                fontSize: scale(13)
                            }}>
                                {'By clicking continue you agree with our '}
                            </Text>
                            <LinkButton
                                title="Privany Policy"
                                underline={false}
                                onPress={() => {
                                    navigation.navigate("Policy");
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.forgetWrapper}>
                        <LinkButton
                            title="Reset Password?"
                            underline={false}
                            onPress={() => {
                                // navigation.navigate("Policy");
                                console.log('test')
                            }}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default SignInScreen;