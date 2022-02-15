import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function Picker({ text, items, change }: any) {
  var styles = StyleSheet.create({
    Picker: {
      borderRadius: 10,
      paddingVertical: 14,
      borderColor: "#000000",
      textAlign: 'center',
      borderWidth: 1,
    },
    pickerText: {
      fontSize: 16,
      color: "black",
      paddingHorizontal: '30%'
    },
  });
  return (
      <RNPickerSelect onValueChange={change} items={items}>
        <View style={styles.Picker}><Text style={styles.pickerText}>{text}</Text></View>
      </RNPickerSelect>
  );
}
