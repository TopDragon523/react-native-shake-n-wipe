import * as React from 'react';
import { useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scale, scaleVertical } from '../../utils/scale';
import { styles } from './styles';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import Header from '../../components/Header';
import CheckBox from '@react-native-community/checkbox';
import LinkButton from '../../components/LinkButton';
import { AuthContext } from '../../AuthProvider';

const Hundle = ({ title, icon, initValue = 0 }) => {
    const [value, setValue] = useState(initValue)
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image
                    style={{
                        width: scale(20),
                        height: scale(20),
                        marginHorizontal: scale(10)
                    }}
                    source={icon}
                />
                <Text style={{
                    fontSize: scale(20),
                    color: Colors.black
                }}>{title}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomColor: Colors.primaryColor,
                borderBottomWidth: scale(3),
                paddingHorizontal: scale(10)
            }}>
                <TouchableOpacity
                    onPress={() => {
                        setValue((c) => c - 1);
                    }}>
                    <Text style={{
                        fontSize: scale(20)
                    }}>{'-'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginHorizontal: scale(30)
                }}>
                    <Text style={{
                        fontSize: scale(20)
                    }}>{value}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setValue((c) => c + 1)
                    }}>
                    <Text style={{
                        fontSize: scale(20)
                    }}>{'+'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const AboutScreen = ({ navigation }) => {
    const { logout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Header
                title={'About Shake n Wipe'}
                leftIcon={Images.ic_back}
                leftPress={() => {
                    navigation.navigate('Main');
                }}
                rightIcon={Images.ic_info}
            />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={styles.containerInner}>
                    <View>
                        <Text style={{
                            fontSize: scale(16),
                            color: Colors.black
                        }}>
                            {'Shake n Wipe is about you , It is for you to track your presonal micro actions, emotions and thoughts.\n\nAnd how doe it work? You just give your phone a quick or repeated shake or wipe depending on the intensity of you fellings on actions.'}
                        </Text>
                    </View>
                    <View style={{
                        // flex: 1
                        paddingVertical: scale(10)
                    }}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title}>{'set tone for shake n wipe'.toUpperCase()}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity
                                    style={styles.datepickerButton}
                                    onPress={() => {
                                        console.log('test');
                                    }}
                                >
                                    <Text
                                        style={styles.datapickerButtonContent}>
                                        {('select shake tone').toUpperCase()}
                                    </Text>
                                </TouchableOpacity>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <CheckBox />
                                    <Text>{'Vibrate'}</Text>
                                </View>
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity
                                    style={styles.datepickerButton}
                                    onPress={() => {
                                        console.log('testF')
                                    }}
                                >
                                    <Text
                                        style={styles.datapickerButtonContent}>
                                        {('select wipe tone').toUpperCase()}
                                    </Text>
                                </TouchableOpacity>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <CheckBox />
                                    <Text>{'Vibrate'}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        paddingVertical: scale(10)
                    }}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title}>{'test sensitivity settings'.toUpperCase()}</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: scale(16),
                                color: Colors.black
                            }}>
                                {'Shake the phone as you normall would. If you don\'t hear tone/vibrate, reduce the hurdle rate and try again after waiting 3 second.Repeat for Wipe. '}
                            </Text>
                        </View>
                        <View style={{
                            marginVertical: scale(20)
                        }}>
                            <Text style={{
                                color: Colors.black
                            }}>
                                {'I completed the following actions before going to sleep'}
                            </Text>
                        </View>
                        <View style={{ marginBottom: scale(20) }}>
                            <Hundle
                                icon={Images.ic_up_down_arrow}
                                title={'Shake Hundle'}
                                initValue={8}
                            />
                        </View>
                        <View style={{ marginBottom: scale(20) }}>
                            <Hundle
                                icon={Images.ic_right_left_arrow}
                                title={'Wipe Hundle'}
                                initValue={12}
                            />
                        </View>
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <LinkButton
                                title={'adjust with caution'}
                                underline={false}
                                onPress={() => {
                                    console.log('test')
                                }}
                            />
                        </View>
                        <TouchableOpacity style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            backgroundColor: Colors.primaryColor,
                            paddingVertical: scale(10),
                            paddingHorizontal: scale(10),
                            marginTop: scale(20)
                        }}
                            onPress={() => logout()}>
                            <Text style={{
                                color: Colors.black,
                                fontSize: scale(18)
                            }}>{'log out'.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View >
    )
}
export default AboutScreen;
