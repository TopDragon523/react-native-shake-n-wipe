import * as React from 'react';
import { useState } from 'react';
import {
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import { styles } from './styles';
import DatePicker from 'react-native-modern-datepicker'


const DatePickerModal = ({ visible, onClose }) => {
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <Modal
            isVisible={visible}
            onBackdropPress={() => {
                onClose();
            }}
            onBackButtonPress={() => {
                onClose();
            }}
        >
            <View style={styles.container}>
                <DatePicker
                    onSelectedChange={date => setSelectedDate(date)}
                />
            </View>
        </Modal>
    );
};

DatePickerModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
}

export default DatePickerModal;