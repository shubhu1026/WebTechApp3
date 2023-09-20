import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
      <Text>First Name</Text>
      <TextInput placeholder="enter first name"></TextInput>
      <Text>Last Name</Text>
      <TextInput placeholder="enter last name"></TextInput>
      <Text>Email</Text>
      <TextInput placeholder="enter email"></TextInput>
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
});
