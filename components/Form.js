import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Form() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const ClearDetails = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const OnSubmit = () => {
    alert(
      `Thank you  for entering the details: \n Name: ${firstName} ${lastName} \n Email: ${email}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Registration</Text>

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

      <View style={{ marginTop: 40 }}>
        <TouchableOpacity onPress={OnSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ClearDetails} style={styles.button}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: "#333333",
  },

  textInput: {
    width: 200,
    alignSelf: "stretch",
    padding: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#bad4aa",
  },

  buttonsContainer: {
    marginTop: 10,
    marginHorizontal: 50,
  },

  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#bad4aa",
    marginTop: 20,
    marginHorizontal: 50,
    borderRadius: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  headerText: {
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 30,
    padding: 5,
    color: "#333333",
    marginHorizontal: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#bad4aa",
    marginBottom: 40,
  },
});
