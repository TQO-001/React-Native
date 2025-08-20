import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Heading from "@/components/Heading";
import Task from "@/components/Task";
import CustomButton from "@/components/CustomButton"; // Check spelling of 'CustomButtom'

export default function HomeScreen() {

  const addTask = () => {
    Alert.alert("Please enter a task");
    return;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Heading
            style={{ color: "#fff" }}
            text="To-Do List App"
            size="large"
          />
          <Text style={styles.text}>Welcome to the To-Do List App!</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            placeholderTextColor={"#888"}
          />
          <CustomButton title="Add Task" onPress={addTask} />
        </View>

        <ScrollView style={styles.taskContainer}>
          <Text style={styles.text}>No Tasks Yet</Text>
          <Task description={"lorem ipsum"}/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 20,
    width: "100%",
  },
  input: {
    flex: 3,
    color: "#fff",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  taskContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#444",
    borderRadius: 8,
    padding: 10,
  },
});
