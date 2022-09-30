import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import { scale, scaleVertical } from '../../utils/scale';

export const styles = StyleSheet.create({
    input: {
        borderBottomWidth: scale(1),
        borderRadius: 0,
        fontSize: scale(16),
        marginVertical: scale(5)
    },
    labelContainer: {
        position: 'absolute',
        left: scale(3),
        top: scale(-6),
        paddingHorizontal: 0,
        backgroundColor: 'white',
    },
    label: {
        color: Colors.black,
        fontSize: scale(12),
    },
    error: {
        marginTop: scale(4),
        marginLeft: scale(12),
        fontSize: scale(12),
        color: '#B00020',
    },
});
