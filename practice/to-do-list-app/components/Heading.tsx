import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Heading({text = "Heading", size = 'medium'}) {
    let prop;
    switch (size) {
        case 'large':
            prop = styles.large;
            break;
        case 'medium':
            prop = styles.medium;
            break;
        case 'small':
            prop = styles.small;
            break;
        default:
            prop = styles.text; 
            break;
        }
    return (
        <View>
        <Text style={[prop, {marginVertical: 15}]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    large: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    medium: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    small: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
    }
});
