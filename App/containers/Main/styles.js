import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import { scale, scaleVertical } from '../../utils/scale';
import { textScale } from '../../utils/textUtil';
import { getDeviceHeight } from '../../utils/extension';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        width: '100%'
    },
    containerInner: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        minHeight: scale(610),
        width: '100%',
    },
    messageWrapper: {
        width: '100%',
        marginTop: scale(10),
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        color: Colors.black,
        fontSize: textScale(20)
    },
    songList: {
        marginTop: scale(18),
        flex: 1
    },
    footer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: scale(27),
        marginBottom: scale(20)
    },
    footerInner: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(0),
    },
    tabContent: {
        flex: 1,
        // backgroundColor: 'pink',
        marginTop: scale(20)
    },
    tabContentInner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subTabWrapper: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: scale(5),
        borderBottomWidth: scale(2)
    },
    subTabContent: {
        color: Colors.black,
        fontSize: scale(16)
    },
    itemHeader: {
        color: Colors.black,
        fontSize: scale(16)
    },
    mainItemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(20),
        marginTop: scale(20)
    },
    emoticPopup: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    graphWrapper: {
        flex: 1,
        backgroundColor: Colors.transparent
    }
});