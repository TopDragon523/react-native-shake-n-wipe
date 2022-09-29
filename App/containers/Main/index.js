import * as React from 'react';
import { useState } from 'react';
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


const DailyView = () => {
    const [items] = useState([
        {
            item: 'item1',
            subItem: "sub item1",
        },
        {
            item: 'item2',
            subItem: "sub item2",
        },
        {
            item: 'item3',
            subItem: "sub item3",
        },
        {
            item: 'item4',
            subItem: "sub item4",
        },
        {
            item: 'item5',
            subItem: "sub item5",
        },
        {
            item: 'item6',
            subItem: "sub item6",
        },
        {
            item: 'item7',
            subItem: "sub item7",
        },
        {
            item: 'item8',
            subItem: "sub item8",
        },
        {
            item: 'item9',
            subItem: "sub item9",
        },
        {
            item: 'item10',
            subItem: "sub item10",
        },
        {
            item: 'item11',
            subItem: "sub item11",
        }
    ]);
    const [subTabIndex, setSubTabIndex] = useState(-1);
    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    paddingHorizontal: scale(20),
                    paddingVertical: scale(10),
                    borderBottomColor: Colors.greyColor,
                    borderWidth: scale(0.5)
                }}>
                <Text>{item.item}</Text>
                <Text>{item.subItem}</Text>
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
            <Text>{'Hello world'}</Text>
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
    const [mute, setMute] = useState(false);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'daily view' },
        { key: 'second', title: 'monthly trend' },
    ]);

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
                        {'Hi Unknown user'}
                    </Text>
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
