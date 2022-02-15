import { StyleSheet, View} from 'react-native';
import React from 'react';
import native from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lobby from './pages/Lobby/Lobby';
import Data from './pages/Data/Data';

export default function App() {
  const [isData, setisData] = React.useState(false)
  React.useEffect(() =>{
    const DataChecker = async () =>{
      try{
        var lang = await AsyncStorage.getItem('lang');
        var difficulty = await AsyncStorage.getItem('difficulty');
        if((!lang || !difficulty) || (lang === "" || difficulty === "")) {
          setisData(false)
        }else if(lang && difficulty){
          setisData(true)
        }
      }catch (err){
        console.log(err)
      }
    }
    DataChecker()
  }, [])
  return (
    <View style={styles.container}>
      {
        isData ? 
          <Lobby/>
        :
          <Data done={setisData}/>
      }
      <native.StatusBar backgroundColor="#34D399"></native.StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttons: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flex: 1
  },
  backButton: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
});
 
