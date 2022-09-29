import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import { scale, scaleVertical } from '../../utils/scale';
import { textScale } from '../../utils/textUtil';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(20)
    },
    text: {
        color: Colors.black,
        fontFamily: Fonts.EpilogueBold,
        fontWeight: '400',
        fontSize: textScale(24),
        marginVertical: scale(7)
    },
    iconImage: {
        width: scale(24),
        height: scale(24)
    }
});
