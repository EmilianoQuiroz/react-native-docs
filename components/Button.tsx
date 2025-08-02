import { Colors } from '@/utils/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    title?: string;
    type?: 'top' | 'right' | 'number';
    onPress: () => void;
}

const Button = ({ title, type, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                {
                    backgroundColor:
                        type === 'top' ? Colors.btnDark :
                        type === 'right' ? Colors.btnRight :
                        Colors.btnLight,
                }
            ]}
        >
            <Text style={{ fontSize: 34, color: type === 'top' ? Colors.light : Colors.dark }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    },
})