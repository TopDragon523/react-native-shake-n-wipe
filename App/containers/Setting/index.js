import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
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
import OutlineButton from '../../components/OutlineButton';
import { LineChart } from 'react-native-charts-wrapper';
import TextField from '../../components/TextField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EmoticPopup from '../../components/EmoticPopup';


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
                    <LineChart style={{
                        flex: 1
                    }}
                        data={{ dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

const renderScene = SceneMap({
    first: DailyView,
    second: MonthlyTrend,
    third: MonthlyTrend,
});
const SettingScreen = ({ navigation }) => {
    const [mute, setMute] = useState(false);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'do more/do less' },
        { key: 'second', title: 'thinking of...' },
        { key: 'third', title: 'in work life' },
    ]);
    const [shakeName, setShakeName] = useState(null);
    const [wipeName, setWipeName] = useState(null);
    const renderTabBar = (props) => (
        <TabBar
            {...props}
            activeColor={Colors.black}
            inactiveColor={Colors.greyColor}
            labelStyle={{
                fontSize: textScale(11),
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
        < View style={styles.container} >
            <Header
                title={'Shake n Wipe Setting'}
                leftIcon={Images.ic_back}
                leftPress={() => {
                    navigation.navigate('Main');
                }}
                rightIcon={Images.ic_info}
            />
            <KeyboardAwareScrollView>
                <View style={styles.containerInner}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: scale(10)
                    }}>
                        <TextField
                            style={{
                                flex: 1
                            }}
                            counter={true}
                            value={shakeName}
                            label={'Name Your Shakes'}
                            onChangeText={(v) => setShakeName(v)}
                        />
                        <EmoticPopup
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: scale(10)
                    }}>
                        <TextField
                            style={{
                                flex: 1
                            }}
                            counter={true}
                            label='Name Your Wipes'
                            value={wipeName}
                            onChangeText={(v) => setWipeName(v)}
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
                            fontSize: scale(16),
                            color: Colors.black
                        }}>
                            {'You can assign an y activity or emotion to the Shake and Wipe action, Here are some ideas tap on any to select and edit '}
                        </Text>
                    </View>
                    <View style={styles.loginWrapper}>
                        <OutlineButton
                            title="CONFIRM CHANGES"
                            loading={false}
                            onPress={() => {
                                navigation.navigate('Track');
                            }}
                        />
                    </View>
                    <View style={styles.songList}>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            renderTabBar={renderTabBar}
                            onIndexChange={setIndex}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View >
    )
}
export default SettingScreen;
