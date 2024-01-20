import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert  } from 'react-native'

export default function NotButton(props : any) {
    const styles = StyleSheet.create({
        button: {
            paddingVertical: 14,
            backgroundColor: props.red  === true ? 'tomato' :'#87ceeb'
        },
        buttonText: {
            fontSize: 16,
            color: 'black',
            textAlign: 'center'
        }
    })
    return (
        <TouchableOpacity onPress={() => {props.Url ? Linking.openURL(props.Url) : ""}}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}