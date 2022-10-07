import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { scale, scaleVertical } from '../../utils/scale';
import { styles } from './styles';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import Header from '../../components/Header';
import { textScale } from '../../utils/textUtil';
import { SafeAreaView } from 'react-native-safe-area-context';
import MasonryList from '@react-native-seoul/masonry-list';
import CheckBox from '@react-native-community/checkbox';
import { LineChart } from 'react-native-charts-wrapper';
import EmoticPopup from '../../components/EmoticPopup';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../../AuthProvider';
import Dataset from '../../utils/Dataset';


const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const DailyView = () => {
    const [shakeItems, setShakeItems] = useState([]);
    const [wipeItems, setWipeItems] = useState([]);
    const [items, setItems] = useState([]);
    const [subTabIndex, setSubTabIndex] = useState(1);
    const [dataset] = useState(Dataset);
    useEffect(() => {
        let now = new Date(2022, 3, 5);
        let today = formatDate(now);
        let yesterday = formatDate(now.setDate(now.getDate() - 1));
        let dayStart = 0;

        let shakeArray = [];
        let wipeArray = [];
        console.log(today);
        console.log(yesterday);
        for (let i = 0; i < 24; i++) {
            let todayByHourShake = 0;
            let yesterdayByHourShake = 0;
            let todayByHourWipe = 0;
            let yesterdayByHourWipe = 0;
            try {
                dataset.forEach((item) => {
                    let tempHour = parseInt(item.localTime.split(':')[0]);
                    if (item.localDate === yesterday) {
                        if (dayStart === tempHour) {
                            if (item.eventName === 'shake') {
                                yesterdayByHourShake++;
                            }
                            if (item.eventName === 'wipe') {
                                yesterdayByHourWipe++;
                            }
                        }
                    }
                    if (item.localDate === today) {
                        if (dayStart === tempHour) {
                            if (item.eventName === 'shake') {
                                todayByHourShake++;
                            }
                            if (item.eventName === 'wipe') {
                                todayByHourWipe++;
                            }
                        }
                    }
                });
                shakeArray.push({
                    interval: i <= 12 ? (
                        (i == 0 ? 12 : i) + 'am - ' + (i == 12 ? 1 : i + 1) + (i == 12 ? 'pm' : 'am')) : (
                        (i - 12) + 'pm - ' + (i + 1 - 12) + 'pm'),
                    today: todayByHourShake,
                    yesterday: yesterdayByHourShake
                })
                wipeArray.push({
                    interval: i <= 12 ? (
                        (i == 0 ? 12 : i) + 'am - ' + (i + 1) + 'am') : (
                        (i - 12) + 'am - ' + (i + 1 - 12) + 'am'),
                    today: todayByHourWipe,
                    yesterday: yesterdayByHourWipe
                })
                dayStart++;
            } catch (err) {
                shakeArray.push({
                    interval: i <= 12 ? (
                        (i == 0 ? 12 : i) + 'am - ' + (i + 1) + 'am') : (
                        (i - 12) + 'am - ' + (i + 1 - 12) + 'am'),
                    today: 0,
                    yesterday: 0
                })
                wipeArray.push({
                    interval: i <= 12 ? (
                        (i == 0 ? 12 : i) + 'am - ' + (i + 1) + 'am') : (
                        (i - 12) + 'am - ' + (i + 1 - 12) + 'am'),
                    today: 0,
                    yesterday: 0
                })
            }
        }
        setItems(shakeArray);
        setShakeItems(shakeArray);
        setWipeItems(wipeArray);
    }, [])
    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingHorizontal: scale(0),
                    paddingVertical: scale(10),
                    borderBottomColor: Colors.greyColor,
                    borderWidth: scale(0.5),
                    borderTopWidth: scale(0),
                    borderTopColor: Colors.transparent,
                    marginTop: scale(1)
                }}>
                <Text style={{
                    width: '40%',
                    alignSelf: 'center',
                    paddingLeft: scale(15)
                }}>{item.interval}</Text>
                <Text style={{
                    backgroundColor: item.today == 0 ? Colors.transparent : 'yellow',
                    width: '30%',
                    paddingLeft: scale(45)
                }}>{item.today}</Text>
                <Text style={{
                    backgroundColor: item.yesterday == 0 ? Colors.transparent : 'yellow',
                    width: '30%',
                    paddingLeft: scale(50)
                }}>{item.yesterday}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.tabContent}>
            <View style={styles.tabContentInner}>
                <TouchableOpacity
                    style={[
                        styles.subTabWrapper,
                        {
                            borderBottomColor: subTabIndex == 1 ? Colors.primaryColor : Colors.white,
                        }]}
                    onPress={() => {
                        setSubTabIndex(1);
                        setItems(shakeItems);
                    }}
                >
                    <Text style={styles.subTabContent}>
                        {'SHAKES'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.subTabWrapper,
                        {
                            borderBottomColor: subTabIndex == -1 ? Colors.primaryColor : Colors.white,
                        }]}
                    onPress={() => {
                        setSubTabIndex(-1);
                        setItems(wipeItems);
                    }}
                >
                    <Text style={styles.subTabContent}>
                        {'WIPES'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainItemWrapper}>
                <Text style={styles.itemHeader}>{'Time Window'}</Text>
                <Text style={styles.itemHeader}>{'Today'}</Text>
                <Text style={styles.itemHeader}>{'Yesterday'}</Text>
            </View>
            <MasonryList
                style={{
                    marginTop: scale(20),
                    paddingHorizontal: scale(5)
                }}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<View />}
                contentContainerStyle={{
                    alignSelf: 'stretch',
                }}
                numColumns={1}
                data={items}
                renderItem={renderItem}
            />
        </SafeAreaView >
    )
};

const MonthlyTrend = () => {
    return (
        <SafeAreaView style={styles.tabContent}>
            <EmoticPopup
                style={styles.emoticPopup}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.graphWrapper}>
                    <LineChart
                        style={{
                            flex: 1
                        }}
                        data={
                            {
                                dataSets: [
                                    {
                                        label: "demo",
                                        values: [
                                            { x: 1, y: 1 },
                                            { x: 2, y: 2 },
                                            { x: 6, y: 10 },
                                            { x: 7, y: 1 },
                                            { x: 8, y: 10 },
                                            { x: 9, y: 11 },
                                            { x: 10, y: 22 },
                                            { x: 11, y: 6 },
                                            { x: 12, y: 2 },
                                            { x: 13, y: 1 },
                                            { x: 14, y: 2 },
                                            { x: 15, y: 1 },
                                        ]
                                    }]
                            }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

const renderScene = SceneMap({
    first: DailyView,
    second: MonthlyTrend,
});
const MainScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    console.log('Hello world ', user);
    const [mute, setMute] = useState(false);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'daily view' },
        { key: 'second', title: 'monthly trend' },
    ]);
    const [selectedValue, setSelectedValue] = useState('first');
    const renderTabBar = (props) => (
        <TabBar
            {...props}
            activeColor={Colors.black}
            inactiveColor={Colors.greyColor}
            labelStyle={{
                fontSize: textScale(14),
                fontWeight: 'bold'
            }}
            indicatorStyle={{
                borderBottomWidth: scale(3),
                borderColor: Colors.primaryColor
            }}
            indicatorContainerStyle={{
                backgroundColor: Colors.white,
            }}
            style={{
                elevation: 0,
                shadowColor: Colors.white,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.4,
                shadowRadius: scale(6)
            }}
        />
    );
    return (
        <View style={styles.container}>
            <Header
                title={'Shake n Wipe Diary'}
                leftIcon={Images.ic_info}
                leftPress={() => {
                    navigation.navigate('About')
                }}
                rightIcon={Images.ic_setting}
                rightPress={() => {
                    console.log('test')
                    navigation.navigate('Setting')
                }}
            />
            <View style={styles.containerInner}>
                <View style={styles.messageWrapper}>
                    <Text style={styles.message}>
                        {'Hi ' + (user.displayName != null ? user.displayName : 'Unknown user')}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}
                >
                    <Picker
                        mode='dropdown'
                        selectedValue={selectedValue}
                        style={{
                            alignItems: 'center',
                            height: scale(50),
                            width: scale(150)
                        }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Reinoud" value="first" />
                        <Picker.Item label="Mote 8 User" value="second" />
                        <Picker.Item label="Muskaan Garg" value="third" />
                    </Picker>
                </View>
                <View style={styles.songList}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        renderTabBar={renderTabBar}
                        onIndexChange={setIndex}
                    />
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerInner}>
                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: Colors.primaryColor,
                                paddingHorizontal: scale(20),
                                paddingVertical: scale(10)
                            }}>
                                <Text style={{
                                    color: Colors.black,
                                    fontSize: scale(20)
                                }}>{'START'}</Text>
                            </View>
                        </TouchableOpacity>
                        <CheckBox
                            value={true}
                            onValueChange={(v) => setMute(!v)}
                            style={{
                                alignSelf: "center",
                            }}
                        />
                        <Text>{'MUTE'}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default MainScreen;
