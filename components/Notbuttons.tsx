import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button(props : any) {
    const styles = StyleSheet.create({
        button: {
            paddingVertical: 14,
            backgroundColor: props.red  === false ? 'tomato' :'#87ceeb'
        },
        buttonText: {
            fontSize: 16,
            color: 'black',
            textAlign: 'center'
        }
    })
    return (
        <View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </View>
    )
}