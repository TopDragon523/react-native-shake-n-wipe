import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import { scale, scaleVertical } from '../../utils/scale';
import { textScale } from '../../utils/textUtil';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.transparent,
    },
    emotic: {
        color: 'black',
        fontSize: scale(30)
    }
});
