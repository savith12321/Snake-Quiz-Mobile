import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import native from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button";
import Picker from "../../components/Picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ({ done, Delete} : any) {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const [selectedDificalty, setselectedDificalty] = React.useState();
  const [langDone, setlangDone] = React.useState(false);
  React.useEffect(() => {
    const func = async () => {
      try{
        if(Delete) {
          await AsyncStorage.clear()
        }
      }catch{

      }
    };
    func()
  }, [])
  return langDone === false ? (
    <>
      <View style={styles.content}>
        <Picker
          style={{ padding: "200" }}
          text={
            selectedLanguage
              ? selectedLanguage === "si"
                ? "සිංහල"
                : "English"
              : "Select a language"
          }
          items={[
            { label: "සිංහල", value: "si" },
            { label: "English", value: "en" },
          ]}
          change={async (value: any) => {
            if (value) {
              await setSelectedLanguage(value);
              try {
                await AsyncStorage.setItem("lang", value);
              } catch (err) {
                console.log(err);
              }
            }
          }}
        />
        <native.StatusBar backgroundColor="#34D399"></native.StatusBar>
      </View>
      <View style={styles.nextButton}>
        <Button
          text="NEXT"
          Click={() => {
            if (selectedLanguage) {
              setlangDone(true);
            } else {
              Alert.alert(
                "Please select a language",
                'Please click on the Button call "Select a language" and select a language',
                [{ text: "OK", onPress: () => {} }]
              );
            }
          }}
        />
      </View>
    </>
  ) : selectedLanguage === "en" ? (
    <>
      <View style={styles.content}>
        <Picker
          style={{ padding: "200" }}
          text={
            selectedDificalty
              ? selectedDificalty === "easy"
                ? "Easy"
                : selectedDificalty === "intermediate"
                ? "Intermediate"
                : "Hard"
              : "Select a difficulty"
          }
          items={[
            { label: "Easy", value: "easy" },
            { label: "Intermediate", value: "intermediate" },
            { label: "Hard", value: "hard" },
          ]}
          change={async (value: any) => {
            if (value) {
              await setselectedDificalty(value);
              try {
                await AsyncStorage.setItem("difficulty", value);
              } catch (err) {
                console.log(err);
              }
            }
          }}
        />
        <native.StatusBar backgroundColor="#34D399"></native.StatusBar>
      </View>
      <View style={styles.nextButton}>
        <Button
          text="NEXT"
          Click={() => {
            if (selectedDificalty) {
              done(true);
            } else {
              Alert.alert(
                "Please select a difficulty",
                'Please click on the Button call "Select a difficulty" and select a difficulty',
                [{ text: "OK", onPress: () => {} }]
              );
            }
          }}
        />
      </View>
    </>
  ) : (
    <>
      <View style={styles.content}>
        <Picker
          style={{ padding: "200" }}
          text={
            selectedDificalty
              ? selectedDificalty === "easy"
                ? "ලේසි"
                : selectedDificalty === "intermediate"
                ? "සාමාන්‍ය"
                : "අමාරු"
              : "දුෂ්කරතාවය"
          }
          items={[
            { label: "ලේසි", value: "easy" },
            { label: "සාමාන්‍ය", value: "intermediate" },
            { label: "අමාරු", value: "en" },
          ]}
          change={async (value: any) => {
            if (value) {
              await setselectedDificalty(value);
              try {
                await AsyncStorage.setItem("difficulty", value);
              } catch (err) {
                console.log(err);
              }
            }
          }}
        />
        <native.StatusBar backgroundColor="#34D399"></native.StatusBar>
      </View>
      <View style={styles.nextButton}>
        <Button
          text="ඊලඟ"
          Click={() => {
            if (selectedDificalty) {
              done(true);
            } else {
              Alert.alert(
                "Please select a difficulty",
                'Please click on the Button call "Select a difficulty" and select a difficulty',
                [{ text: "OK", onPress: () => {} }]
              );
            }
          }}
        />
      </View>
    </>
  );
}

var styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
