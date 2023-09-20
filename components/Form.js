import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Label from "./Label";

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

      <Button title="Submit"></Button>
      <Button onPress={ClearDetails} title="Clear"></Button>
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

  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  label: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },

  labelContainer: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    padding: 10,
    marginLeft: 10,
    width: "auto",
  },
});
