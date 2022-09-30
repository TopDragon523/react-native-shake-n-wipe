import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import { styles } from './styles';
import DatePicker from 'react-native-modern-datepicker'
import Colors from '../../utils/Colors';
import { scale } from '../../utils/scale';
import DateTimePicker from '@react-native-community/datetimepicker';


const DatePickerModal = ({ visible, date, onChange }) => {
    return (
        <>
            {
                visible &&
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="calendar"
                    onChange={onChange}
                />
            }
        </>
        // <Modal
        //     isVisible={visible}
        //     onBackdropPress={() => {
        //         onClose();
        //     }}
        //     onBackButtonPress={() => {
        //         onClose();
        //     }}
        // >
        //     <View style={styles.container}>
        //         <View style={{
        //             position: 'relative',
        //             width: '100%',
        //             backgroundColor: Colors.primaryColor,
        //         }}>
        //             <Text style={{ color: Colors.white }}>{'what was the today\'s key event?'.toUpperCase()}</Text>
        //         </View>
        //         <DatePicker
        //             current={selectedDate.toString()}
        //             onSelectedChange={date => setSelectedDate(date)}
        //         />
        //     </View>
        // </Modal>
    );
}

DatePickerModal.propTypes = {
    visible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    date: PropTypes.any
}

export default DatePickerModal;