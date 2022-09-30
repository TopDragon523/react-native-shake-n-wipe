import React, { useState, useRef } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Popover from 'react-native-popover-view/dist/Popover';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const EmoticPopup = (props) => {
    const {
        ...others
    } = props;
    const insets = useSafeAreaInsets();
    const touchable = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState('\u25BC');
    return (
        <View
            style={styles.container}
            {...others}
        >
            <TouchableOpacity
                ref={touchable}
                onPress={() => setShowPopup(true)}
                style={{
                    flexDirection: 'row',
                }}>
                <Text style={[styles.emotic, { color: 'black' }]}>{selectedIcon}</Text>
            </TouchableOpacity>
            <Popover
                from={touchable}
                isVisible={showPopup}
                onRequestClose={() => setShowPopup(false)}
                displayAreaInsets={insets}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIcon('😃');
                            setShowPopup(false)
                        }}><Text style={styles.emotic}>{'😃'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIcon('😇');
                            setShowPopup(false)
                        }}><Text style={styles.emotic}>{'😇'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIcon('🥰');
                            setShowPopup(false)
                        }}><Text style={styles.emotic}>{'🥰'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIcon('☹️');
                            setShowPopup(false)
                        }}><Text style={styles.emotic}>{'☹️'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIcon('😡');
                            setShowPopup(false)
                        }}><Text style={styles.emotic}>{'😡'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIcon('😱');
                            setShowPopup(false)
                        }}><Text style={styles.emotic}>{'😱'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIcon('😥');
                            setShowPopup(false)
                        }}><Text style={styles.emotic}>{'😥'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIcon('😑');
                            setShowPopup(false)
                        }}><Text style={styles.emotic}>{'😑'}</Text>
                    </TouchableOpacity>
                </View>
            </Popover>
        </View>
    );
};

EmoticPopup.propTypes = {

}

export default EmoticPopup;