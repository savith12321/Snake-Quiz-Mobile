import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Notbuttons from "./Notbuttons"
const Ansitem = ({Img, Answer, Red, Url}: any) => {
  var styles = StyleSheet.create({
    Notbuttons:  {
      padding: 10,
    }
  });
  return (
    <View>
      <Image source={{uri: `http://192.168.6.203:4000/images/` + Img }} style={{width: "100%", height: 400}}/>
      <Notbuttons text={Answer} red={Red} style={styles.Notbuttons} Url={Url}/>
    </View>
  );
};

export default Ansitem;