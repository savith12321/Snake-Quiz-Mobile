import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Notbuttons from "./Notbuttons"
<<<<<<< HEAD
const Ansitem = ({Img, Answer, Red, Url}: any) => {
=======
const Ansitem = ({Img, Answer, Red}: any) => {
>>>>>>> ce00dc1d3de00dd8f0c8487a57b65ef35d952487
  var styles = StyleSheet.create({
    Notbuttons:  {
      padding: 10,
    }
  });
  return (
    <View>
<<<<<<< HEAD
      <Image source={{uri: `http://192.168.6.203:4000/images/` + Img }} style={{width: "100%", height: 400}}/>
      <Notbuttons text={Answer} red={Red} style={styles.Notbuttons} Url={Url}/>
=======
      <Image source={{uri: "https://snake-quiz.savithsavith.repl.co/images/" + Img }} style={{width: "100%", height: 400}}/>
      <Notbuttons text={Answer} red={Red} style={styles.Notbuttons}/>
>>>>>>> ce00dc1d3de00dd8f0c8487a57b65ef35d952487
    </View>
  );
};

export default Ansitem;