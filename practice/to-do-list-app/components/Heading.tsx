import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Heading({ text="Heading", size='medium', style={} }) {
    let sizeStyle;
    switch (size) {
        case 'large':
            sizeStyle = styles.large;
            break;
        case 'medium':
            sizeStyle = styles.medium;
            break;
        case 'small':
            sizeStyle = styles.small;
            break;
        default:
            sizeStyle = styles.text; 
            break;
        }
    return (
        <View>
        <Text style={[ sizeStyle, { marginVertical: 15, fontWeight: "bold" }, style ]}>
            {text}
        </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    large: {
        fontSize: 32,
    },
    medium: {
        fontSize: 24,
    },
    small: {
        fontSize: 16,
    },
    text: {
        fontSize: 14,
    }
});
