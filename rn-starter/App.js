import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Greeting({ name, mood }) {
  if (mood) {
    return <Text style={styles.greeting}>Hi, {name} ✌️({mood})</Text>
  } else {
    return <Text style={styles.greeting}>Hi, {name} ✌️</Text>
  }
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ width: "100%", padding: 16 }}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <View style={{ flex: 1, height: 60, backgroundColor: "#ddd" }}></View>
        <View style={{ flex: 2, height: 60, backgroundColor: "#bbb" }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  greeting: {
    fontSize: 18,
    padding: 20,
    opacity: 0.8,
  },
});
