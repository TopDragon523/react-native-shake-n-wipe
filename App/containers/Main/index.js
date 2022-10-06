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

const DailyView = () => {
    const [items, setItems] = useState([]);
    const [subTabIndex, setSubTabIndex] = useState(-1);
    useEffect(() => {
        let timeArray = [];
        let d = new Date();
        for (let i = 1; i <= 24; i++) {
            timeArray.push({
                interval: i < 12 ? ((i - 1) + 'am - ' + i + 'am') : ((i - 12 - 1) + 'am - ' + (i - 12) + 'am'),
                today: 0,
                yesterday: 0
            })
        }
        setItems(timeArray);
    }, [])
    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingHorizontal: scale(20),
                    paddingVertical: scale(10),
                    borderBottomColor: Colors.greyColor,
                    borderWidth: scale(0.5),
                    borderTopWidth: scale(0),
                    borderTopColor: Colors.transparent,
                    marginTop: scale(1)
                }}>
                <Text>{item.interval}</Text>
                <Text>{item.today}</Text>
                <Text>{item.yesterday}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.tabContent}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: scale(5),
                        borderBottomColor: subTabIndex == 1 ? Colors.primaryColor : Colors.white,
                        borderBottomWidth: scale(2)
                    }}
                    onPress={() => setSubTabIndex(1)}
                >
                    <Text style={{
                        color: Colors.black,
                        fontSize: scale(16)
                    }}>
                        {'SHAKES'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: scale(5),
                        borderBottomColor: subTabIndex == -1 ? Colors.primaryColor : Colors.white,
                        borderBottomWidth: scale(2)
                    }}
                    onPress={() => setSubTabIndex(-1)}
                >
                    <Text style={{
                        color: Colors.black,
                        fontSize: scale(16)
                    }}>
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
        </SafeAreaView>
    )
};

const MonthlyTrend = () => {
    return (
        <SafeAreaView style={styles.tabContent}>
            <EmoticPopup
                style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            />
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#F5FCFF'
                }}>
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
                                            { y: 1 },
                                            { y: 2 },
                                            { y: 1 },
                                            { y: 2 },
                                            { y: 1 },
                                            { y: 2 },
                                            { y: 1 },
                                            { y: 10 },
                                            { y: 11 },
                                            { y: 22 },
                                            { y: 6 },
                                            { y: 2 },
                                            { y: 1 },
                                            { y: 2 },
                                            { y: 1 },
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
