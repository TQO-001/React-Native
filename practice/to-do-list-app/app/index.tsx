import Heading from "@/components/Heading";
import TaskButton from "@/components/Button";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Heading text="To-Do List App" size="large" />
        <Text>Welcome to the To-Do List App!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            placeholder="Add a new task"
          />
          <TaskButton style={styles.button}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 15,
      height: 50,
      width: "100%",
      maxWidth: "100%",
      paddingHorizontal: 20,
      backgroundColor: "red",
    },
    input: {
      flex: 3,
      height: 40,
      width: "100%",
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
    },
    button: {
      flex: 1,
      width: "100%",
      height: 40,
    }
});
