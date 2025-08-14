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
    <View style={styles.container}>
      <Greeting name="Thulani" />
      <Text style={styles.title}>Count: {count}</Text>

      <Button 
        title="Increment" 
        onPress={() => {
          setCount(c => c + 1)
        }}/>

      <Greeting name="Dude" mood="focused" />
      <Button 
        title="Reset"
        onPress={() => {
          setCount(0)
        }}/>

      <StatusBar style="auto" />
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
