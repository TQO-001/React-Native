import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button 
        title="Go to details"
        onPress= {() => {
          navigation.navigate('Details', {
            itemId: 42,
            otherParam: "Hello from Home!",
          })
        }}/>

      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile", {
            username: "Thulani",
          })
        }}/>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Detail Screens</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button 
        title="Go to profile" 
        onPress={() => { 
          navigation.navigate('Profile', {
            username: "Thulani",
          })}
        }/>
    </View>
  );
 };


function ProfileScreen({ route, navigation }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, { username }</Text>
      <Text style={styles.title}>Profile Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
