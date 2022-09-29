import * as React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Images from '../../utils/Images';
import IconButton from '../IconButton';

const Header = ({
    title,
    rightIcon,
    leftIcon,
    leftPress,
    rightPress
}) => {
    return (
        <View
            style={styles.container}
        >
            <IconButton
                width={24}
                height={24}
                icon={leftIcon}
                onPress={leftPress}
            />
            <Text style={styles.text}>
                {title}
            </Text>
            <IconButton
                width={24}
                height={24}
                icon={rightIcon}
                onPress={rightPress}
            />
        </View>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any,
    leftPress: PropTypes.func,
    rightPress: PropTypes.func

}

export default Header;