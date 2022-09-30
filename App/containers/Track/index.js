import * as React from 'react';
import { useState, useReducer } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { scale, scaleVertical } from '../../utils/scale';
import { styles } from './styles';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import Header from '../../components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePickerModal from '../../components/DatePickerModal';
import CheckBox from '@react-native-community/checkbox';
import TextField from '../../components/TextField';
import EmoticPopup from '../../components/EmoticPopup';

const getDate = (date) => {
    let temp = new Date(date);
    let options = {
        weekday: "long",
        day: "numeric",
        month: "short", //to display the full name of the month
        year: "numberic"
    }
    if (date.getMontjh == new Date()) return 'today';
    return temp.toLocaleDateString("en-US", options);
}
const TrackScreen = ({ navigation }) => {
    const [keyEvent, setKeyEvent] = useState(null);
    const [endOfDay, setEndOfDay] = useState(null);
    const [datePickerModal, setDatePickerModal] = useState(false)

    const [keyEventdate, setKeyEventDate] = useState(new Date());
    const [endofDaydate, setEndOfDayDate] = useState(new Date());
    const [calendarDate, setCalendardate] = useState(new Date());
    const [flag, setFlag] = useState(1);
    const onChange = (event, selectedDate,) => {
        const currentDate = selectedDate;
        setDatePickerModal(false);
        flag == 1 ? setKeyEventDate(currentDate) : setEndOfDayDate(currentDate);
    };
    return (
        <View style={styles.container}>
            <Header
                title={'Shake n Wipe Setting'}
                leftIcon={Images.ic_back}
                leftPress={() => {
                    navigation.navigate('Setting');
                }}
                rightIcon={Images.ic_info}
            />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
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
                                const temp = keyEventdate;
                                setCalendardate(temp);
                                setFlag(1);
                                setDatePickerModal(true)
                            }}
                        >
                            <Text
                                style={styles.datapickerButtonContent}>
                                {
                                    ('selected date: ' + getDate(keyEventdate) + '(tap to change)').toUpperCase()
                                }
                            </Text>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: scale(10)
                        }}>
                            <TextField
                                style={{ flex: 1 }}
                                label='Enter Text'
                                value={keyEvent}
                                counter={true}
                                onChangeText={(v) => setKeyEvent(v)}
                            />
                            <EmoticPopup
                                style={{
                                    justifyContent: 'center',
                                }}
                            />
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
                                const temp = endofDaydate;
                                setCalendardate(temp);
                                setFlag(-1);
                                setDatePickerModal(true)
                            }}
                        >
                            <Text style={styles.datapickerButtonContent}>{('selected date: ' + getDate(endofDaydate) + '(tap to change)').toUpperCase()}</Text>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: scale(10)
                        }}>
                            <TextField
                                style={{ flex: 1 }}
                                label='Enter Text'
                                counter={true}
                                value={endOfDay}
                                onChangeText={(v) => setEndOfDay(v)}
                            />
                            <EmoticPopup
                                style={{
                                    justifyContent: 'center',
                                }}
                            />
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
                    date={calendarDate}
                    onChange={onChange}
                />
            </KeyboardAwareScrollView >
        </View >
    )
}
export default TrackScreen;
