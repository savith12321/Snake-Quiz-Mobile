import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import Quiz from "../../pages/Quiz/Quiz";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Data from "../Data/Data";
import { Menu, MenuItem } from "react-native-material-menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Lobby() {
  const [play, setPlay] = useState(false);
  const [reset, setRest] = useState(true);
  const [visible, setVisible] = useState(false);
  const [lang, setlang] = useState();

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  useEffect(() => {
    const DataChecker = async () => {
      try {
        var lang_async: any = await AsyncStorage.getItem("lang");
        setlang(lang_async);
      } catch (err) {
        console.log(err);
      }
    };
    DataChecker();
  }, []);

  useEffect(() => {
    const DataChecker = async () => {
      try {
        var lang_async: any = await AsyncStorage.getItem("lang");
        setlang(lang_async);
      } catch (err) {
        console.log(err);
      }
    };
    DataChecker();
  }, [reset, play, visible]);

  return play === false ? (
    reset === false ? (
      <Data done={setRest} Delete={true} />
    ) : (
      <>
        <View style={styles.menu}>
          <Menu
            visible={visible}
            anchor={
              <Text onPress={showMenu}>
                <Icon name="ellipsis-v" size={30} />
              </Text>
            }
            onRequestClose={hideMenu}
          >
            <MenuItem
              onPress={() => {
                setRest(false);
                hideMenu();
              }}
            >
              {lang === "en" ? "Reset" : "යළි පිහිටුවන්න"}
            </MenuItem>
            <MenuItem onPress={() => {
              Linking
                .openURL("https://d1f1cb95-80f6-4cfc-aad7-d9f1a90ab434-00-309isak8dim7m.kirk.replit.dev/privacypolicy")
                .catch(err => console.error('Error', err));
            }}>
              {lang == "en" ? "Privacy policy" : "රහස්යතා ප්රතිපත්තිය"}
            </MenuItem>
          </Menu>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Snake Quiz</Text>
        </View>
        <View style={{margin: '4%'}}>
        <Button
            text={lang === "en" ? "Play" : "පටන්ගන්න"}
            Click={() => setPlay(true)}
        />
        </View>
      </>
    )
  ) : (
    <Quiz Back={setPlay} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttons: {
    width: "100%",
    height: "25%",
    backgroundColor: "#ffffff",
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  menu: {
    position: "absolute",
    marginLeft: "90%",
    marginVertical: "5%",
  },
});
