import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { scale, scaleVertical } from '../../utils/scale';
import { styles } from './styles';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import Header from '../../components/Header';
import AuthInput from '../../components/AuthInput';
import DatePickerModal from '../../components/DatePickerModal';
import CheckBox from '@react-native-community/checkbox';


const TrackScreen = ({ navigation }) => {
    const [datePickerModal, setDatePickerModal] = useState(false)
    return (
        <View style={styles.container}>
            <Header
                title={'Shake n Wipe Setting'}
                leftIcon={Images.ic_back}
                leftPress={() => {
                    navigation.navigate('Main');
                }}
                rightIcon={Images.ic_info}
            />
            <View style={styles.containerInner}>
                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.primaryColor,
                        borderRadius: scale(10),
                        borderColor: Colors.black,
                        borderWidth: scale(3),
                        paddingVertical: scale(5),
                        alignItems: 'center',
                    }}>
                    <Text style={{
                        fontSize: scale(22),
                        color: Colors.black
                    }}>{'SET EVENT TO TRACK'}</Text>
                </TouchableOpacity>
                <View style={{
                    // flex: 1
                    paddingVertical: scale(10)
                }}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{'what was today\s key event?'.toUpperCase()}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.datepickerButton}
                        onPress={() => {
                            setDatePickerModal(true)
                        }}
                    >
                        <Text style={styles.datapickerButtonContent}>{('selected date: ' + 'today ' + '(tap to change)').toUpperCase()}</Text>
                    </TouchableOpacity>
                    <AuthInput
                        placeholder='Enter Text'
                        // icon={Images.ic_email}
                        value={''}
                        onChangeText={() => {
                            console.log('test')
                        }}
                        borderType={"roundTop"}
                    />
                    <TouchableOpacity style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: Colors.secondaryColor,
                        paddingVertical: scale(10),
                        paddingHorizontal: scale(10),
                        marginTop: scale(20)
                    }}>
                        <Text style={{
                            color: Colors.black,
                            fontSize: scale(18)
                        }}>
                            {'submit'.toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    paddingVertical: scale(10)
                }}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{'end of day review'.toUpperCase()}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.datepickerButton}
                        onPress={() => {
                            setDatePickerModal(true)
                        }}
                    >
                        <Text style={styles.datapickerButtonContent}>{('selected date: ' + 'today ' + '(tap to change)').toUpperCase()}</Text>
                    </TouchableOpacity>
                    <AuthInput
                        placeholder='Enter Text'
                        // icon={Images.ic_email}
                        value={''}
                        onChangeText={() => {
                            console.log('test')
                        }}
                        borderType={"roundTop"}
                    />
                    <View style={{
                        marginVertical: scale(20)
                    }}>
                        <Text style={{
                            color: Colors.black
                        }}>
                            {'I completed the following actions before going to sleep'}
                        </Text>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '50%'
                            }}>
                                <CheckBox />
                                <Text>{'Rythmic Vreathing'}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '50%'
                            }}>
                                <CheckBox />
                                <Text>{'Seek Forgiveness'}</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '50%'
                            }}>
                                <CheckBox />
                                <Text>{'Meditation'}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '50%'
                            }}>
                                <CheckBox />
                                <Text>{'Healing Done or Taken'}</Text>
                            </View>

                        </View>
                    </View>
                    <TouchableOpacity style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: Colors.secondaryColor,
                        paddingVertical: scale(10),
                        paddingHorizontal: scale(10),
                        marginTop: scale(20)
                    }}>
                        <Text style={{
                            color: Colors.black,
                            fontSize: scale(18)
                        }}>{'submit'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <DatePickerModal
                visible={datePickerModal}
                onClose={() => {
                    setDatePickerModal(false)
                }}
            />
        </View>
    )
}
export default TrackScreen;
