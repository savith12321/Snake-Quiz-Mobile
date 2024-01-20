import React from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Button from "../../components/Button";
import Ansitem from "../../components/Ansitem";

export default function ViewAnswers({ answers, lang, back }: any) {
  const renderItem = ({ item } : any) => (
<<<<<<< HEAD
    <Ansitem Img={item.Img} Answer={item.Answer} Red={item.Red} Url={"https://www.youtube.com/watch?v=dd5gUbs3tuU"}/>
=======
    <Ansitem Img={item.Img} Answer={item.Answer} Red={item.Red}/>
>>>>>>> ce00dc1d3de00dd8f0c8487a57b65ef35d952487
  );
  return (
    <>
      <View style={{flex: 1}}>
      <FlatList 
        data={answers}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
      </View>
      <StatusBar backgroundColor="#34D399"></StatusBar>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            text={lang === "si" ? "ආපසු" : "BACK"}
            Click={() => {
              back(false);
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  buttons: {
    alignItems: "center",
  },
  button: {
    width: "50%",
  }
});
