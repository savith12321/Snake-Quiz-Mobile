import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Notbuttons from "./Notbuttons"
const Ansitem = ({Img, Answer}: any) => {
  var styles = StyleSheet.create({
    Notbuttons:  {
      padding: 10,
    }
  });
  return (
    <View>
      <Image source={{uri: "https://snake-quiz.herokuapp.com/images/" + Img }} style={{width: "100%", height: 400}}/>
      <Notbuttons text={Answer} red={true} style={styles.Notbuttons}/>
    </View>
  );
};

export default Ansitem;
