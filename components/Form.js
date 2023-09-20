import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Form() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const ClearDetails = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.text}>First Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter First Name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        ></TextInput>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.text}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Last Name"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        ></TextInput>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        ></TextInput>
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Submit"></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={ClearDetails} title="Clear"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  labelContainer: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 50,
    marginVertical: 5,
  },

  text: {
    width: 100,
    fontWeight: "bold",
    fontSize: 16,
  },

  textInput: {
    width: 200,
    padding: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
  },

  buttonsContainer: {
    marginTop: 30,
    marginHorizontal: 50,
  },
});
