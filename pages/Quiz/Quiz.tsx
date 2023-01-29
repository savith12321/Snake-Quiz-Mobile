import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import native from "react-native";
import axios from "axios";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ViewAnswers from '../ViewAnswers/ViewAnswers';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function App(props : any) {
  const [quizes, setquizes]: any = React.useState([]);
  const [question, setquestion]: any = React.useState();
  const [id, setid]: any = React.useState();
  const [qnum, setQnum]: any = React.useState(0);
  const [answers, setanswers]: any = React.useState([]);
  const [finished, setfinished]: any = React.useState(false);
  const [score, setScore]: any = React.useState();
  const [lang, setlang]: any = React.useState();
  const [difficulty, setdifficulty]: any = React.useState();
  const [Resalts, setResalts] = React.useState(false)
  React.useEffect(() => {
    const func = async () => {
      try {
        var langStorage = await AsyncStorage.getItem("lang");
        var difficultyStorage = await AsyncStorage.getItem("difficulty");
        await setlang(langStorage);
        await setdifficulty(difficultyStorage);
        console.log(langStorage);
        await axios
          .get(
            `https://snake-quiz.savithsavith.repl.co/api/quiz?lang=${langStorage}&difficulty=${difficultyStorage}`
          )
          .then((result) => {
            console.log(result.data);
            setquizes(result.data);
            setid(result.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    func();
  }, []);
  React.useEffect(() => {
    setquestion(quizes[qnum]);
  }, [quizes]);
  React.useEffect(() => {
    setquestion(quizes[qnum]);
    if (quizes! != 0 && quizes.length === qnum) {
      axios
        .post("https://snake-quiz.savithsavith.repl.co/api/quiz/score", {answers: answers, quiz: quizes, lang: lang})
        .then((resalt) => {
          console.log(resalt)
          setScore(resalt.data);
          setfinished(true);
        });
      console.log("posted the awensers;");
    }
  }, [qnum]);
  return question === undefined && finished === false ? (
    <View>
      <native.StatusBar backgroundColor="#34D399"></native.StatusBar>
    </View>
  ) : finished === true ? (
    lang === "en" ? (
      Resalts === false?
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Your score is:</Text>
          <Text style={{ fontSize: 30 }}>
            {score.score}/{quizes.length}
          </Text>
          <native.StatusBar backgroundColor="#34D399"></native.StatusBar>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={{width: "48%", marginLeft: '3%'}}>
            <Button
              text="RESALTS"
              Click={() => {
                setResalts(true)
              }}
              style={styles.nextButton}
            />
          </View>
          <View style={{width: "45%", marginLeft: '2%', marginRight: '3%'}}>
            <Button
              text="BACK TO HOME"
              Click={() => {
                props.Back(false);
              }}
              style={styles.nextButton}
            />
          </View>
        </View>
      </>
      :
      <>
        <ViewAnswers answers={score.answers} lang='en' back={setResalts}/>
      </>
    ) : (
      Resalts === false?
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>ඔබේ ලකුණු ප්‍රමාණය:</Text>
          <Text style={{ fontSize: 30 }}>
            {score.score}/{quizes.length}
          </Text>
          <native.StatusBar backgroundColor="#34D399"></native.StatusBar>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={{width: "48%", marginLeft: '3%'}}>
            <Button
              text="ප්‍රතිඵල"
              Click={() => {
                setResalts(true)
              }}
              style={styles.nextButton}
            />
          </View>
          <View style={{width: "45%", marginLeft: '2%', marginRight: '3%'}}>
            <Button
              text="මුල් පිටුවට"
              Click={() => {
                props.Back(false);
              }}
              style={styles.nextButton}
            />
          </View>
        </View>
      </>
      :
      <>
        <ViewAnswers answers={score.answers} lang='si' back={setResalts}/>
      </>
    )
  ) : (
    <View style={styles.container}>
      <ImageViewer
        imageUrls={[
          {
            url: "https://snake-quiz.savithsavith.repl.co/images/" + question.image,
          }
        ]}
        style={{
          width: "100%",
          height: "50%",
        }}
      />
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <Text style={{ fontSize: 20, alignContent: "center" }}>
          {question.question}
        </Text>
        {question.answers.map((data: any) => {
          return (
            <Button
              key={data.name}
              text={data.name}
              Click={async (e: any) => {
                setanswers((prevanswers: any) => {
                  return [...prevanswers, { q_id: question.id, a_id: data.id }];
                });
                setQnum((prevqnum: any) => (prevqnum += 1));
              }}
            />
          );
        })}
      </View>
      <native.StatusBar backgroundColor="#34D399"></native.StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? native.StatusBar.currentHeight : 0,
  },
  buttons: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
    flex: 1,
  },
  nextButton: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    justifyContent: "space-evenly",
    alignContent: "center",
  }
});
