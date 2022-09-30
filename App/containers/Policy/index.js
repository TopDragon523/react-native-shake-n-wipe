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
import Colors from '../../utils/Colors';

const PolicyScreen = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Header
                title={'Privacy Policy'}
            />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={styles.containerInner}>
                    <Text style={{
                        color: Colors.black
                    }}>
                        {'SHAKE IT PRIVAY POLICY\nThis Privacy is for the Beta test version of Shake it App only\nThe Shake it app and services include the technical service provide such as and not limited to. Google Workspace, Firebase, internet browsers, Google Play Store and mobile device operating systems\n\nINFORMATION YOU CHOOSE TO GIVE US\nWhen you interact with our products and services, we collect the information that you choose to share with us. For example, if you set up an account in our app, we need username, a password and an email address. We reserve the right to verify your email identity\nWe offer users the option in the App to manually enter free form text as daily events entries. This information is stored in Firebase databases that are governed by Firebase Privacy and Security Policy. Firebase is certified under all major privacy and security standards in addition being comliant under GDPR and CCPA standards. Refer to details here: https://firebase.google.com/support/privacy\n\nAUTOMATICALLY COLLECTED INFROMATION\nWhen you use the service, we may automatically collect or generate information including but not limited to the Internet Protocol("IP") address of your computer; web pages that you access within the Service; geographic information; a unique user ID; the type of browser; device or operating system you use; referring services or websites search information; and usage and browsing information.\n\nLOG INFORMATION\nWe collect log information when you access the app and use our website. That information includes all the information that you chose to give us. This information is essential provide you a seamless experience.\nBy signing to the app you authorize us to share your log information with a selected person, whose name will be displayed at time of sign in and in-app We will retain your data is long as you are a registered user of our Service.\nYou can provide a request in writing to request and delete all your log information.\nAll the data that you have provided will be deleted after the Beta test version is concluded. A written confirmation will be sent to all registered users\n\nSHARING OF INFORMATION.\nYour personal data stays within our Services. It is not shared or sold to third party. For clarity, our Services include the technical service provides such as and not limited to. Google Workspace, Firebase, internet browsers, Google Play Store and mobile device operating systems'}
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default PolicyScreen;