import * as React from 'react';
import {
    View,
    Text
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthInput from '../../components/AuthInput';
import LinkButton from '../../components/LinkButton';
import OutlineButton from '../../components/OutlineButton';
import { styles } from './styles';
import Header from '../../components/Header';

const SignInScreen = ({ navigation }) => {
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1, }}>
                <Header
                    title={'Login to Shake n Wipe'}
                />
                <View style={styles.containerInner}>
                    <View style={styles.loginMessageWrapper}>
                        <Text style={styles.loginMessage}>
                            {'Please enter Name, Email and Password'}
                        </Text>
                    </View>
                    <View style={styles.inputForm}>
                        <AuthInput
                            placeholder='Name'
                            // icon={Images.ic_email}
                            value={userName}
                            onChangeText={(v) => setUserName(v)}
                            borderType={"roundTop"}
                        />
                        <View style={styles.divider} />
                        <AuthInput
                            placeholder='Email'
                            // icon={Images.ic_email}
                            value={email}
                            onChangeText={(v) => setEmail(v)}
                            borderType={"roundTop"}
                        />
                        <View style={styles.divider} />
                        <AuthInput
                            placeholder='Password'
                            // icon={Images.ic_password}
                            value={password}
                            onChangeText={(v) => setPassword(v)}
                            borderType={"roundBottom"}
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
                            <Text>
                                {'By clicking continue you agree with our Privany Policy'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.forgetWrapper}>
                        <LinkButton
                            title="Reset Password?"
                            underline={false}
                            onPress={() => {
                                // navigation.navigate("Profile");
                            }}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default SignInScreen;