import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  const firstButtonClickHandler = () => {
    Alert.alert("Сайн байна уу? Та оюутаны эрхээр нэвтэрлээ.");
  };
  const secondButtonClickHandler = () => {
    Alert.alert("Сайн байна уу? Та админы эрхээр нэвтэрлээ.");
  };
  return (
    <View style={styles.container}>
      <View style={styles.bubbleOne}></View>
      <View style={styles.bubbleTwo}></View>
      <View style={styles.bubbleThree}></View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: 210,
            width: 320,
            bottom: 100,
          }}
          source={require("./assets/ШМТДС-Лого(Transparent).png")}
        />
      </View>

      <View style={styles.homePageText}>
        <Text style={{ fontSize: 25, bottom: 25 }}>Name</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={{ left: 50, bottom: 50 }}>
        <Text style={{ fontSize: 25, bottom: 25 }}>Phone</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <Button title="НЭВТРЭХ" onPress={firstButtonClickHandler} />
      <View style={{ alignItems: "center", justifyContent: "center", top: 45 }}>
        <Button
          title="Админы эрхээр нэвтрэх"
          style={{ color: "blue", top: 40 }}
          onPress={secondButtonClickHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  homePageText: {
    left: 50,
    fontSize: 25,
    bottom: 95,
  },
  input: {
    padding: 25,
    borderWidth: 1,
    width: 300,
    borderRadius: 15,
  },
  bubbleOne: {
    position: "absolute",
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.5,
    top: -50,
    left: -60,
  },
  bubbleTwo: {
    position: "absolute",
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.3,
    bottom: -50,
    right: -60,
  },
  bubbleThree: {
    position: "absolute",
    height: 250,
    width: 250,
    borderRadius: 300 / 2,
    backgroundColor: "#7F2B0A",
    opacity: 0.5,
    bottom: -100,
    right: 80,
  },
});
