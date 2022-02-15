import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button(props : any) {
    return (
        <TouchableOpacity onPress={props.Click}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#34D399'
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center'
    }
})
