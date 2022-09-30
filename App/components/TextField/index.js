import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Animated, Easing } from 'react-native';
import Colors from '../../utils/Colors';
import { scale } from '../../utils/scale';
import { styles } from './styles';


const TextField = (props) => {
    const {
        label,
        style,
        value,
        errorText,
        onBlur,
        onFocus,
        counter = false,
        ...restOfProps
    } = props;

    const ref = useRef();
    const [color, setColor] = useState(Colors.black);
    const focusAnim = useRef(new Animated.Value(0)).current
    const [isFocused, setIsFocused] = useState(false)
    useEffect(() => {
        isFocused ? setColor(Colors.primaryColor) : setColor(Colors.black);
        Animated.timing(focusAnim, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: false,
        }).start();
    }, [focusAnim, isFocused, value]);
    return (
        <View style={style}>
            <TextInput
                ref={ref}
                maxLength={counter ? 30 : null}
                color={color}
                style={[
                    styles.input,
                    {
                        borderColor: color,
                    },
                ]}
                value={value}
                {...restOfProps}
                onBlur={(event) => {
                    setIsFocused(false)
                    onBlur?.(event)
                }}
                onFocus={(event) => {
                    setIsFocused(true)
                    onFocus?.(event)
                }}
            />
            <Animated.View
                style={[
                    styles.labelContainer,
                    {
                        top: focusAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [24, -6],
                        }),
                    },
                ]}
            >
                <Animated.Text
                    style={[
                        styles.label,
                        {
                            fontSize: focusAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [16, 12],
                            }),
                            color
                        },
                    ]}
                >
                    {label}
                    {errorText ? '*' : ''}
                </Animated.Text>
            </Animated.View>
            <View style={{
                marginTop: scale(10),
                flexDirection: 'row',
                justifyContent: 'flex-end',
                display: counter ? 'flex' : 'none'
            }}>
                <Text>{(value == null ? '0' : value.toString().length) + '/30'}</Text>
            </View>
            {!!errorText && <Text style={styles.error}>{errorText}</Text>}
        </View >
    )
};
export default TextField;