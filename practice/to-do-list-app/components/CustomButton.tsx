import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function CustomButton({ onPress = () => {}, title="Button", style={} }) {
  const isTitleEmpty = "Button" === title;
  
  return (
    <Pressable 
      onPress={onPress} 
      style={[ styles.button, isTitleEmpty && { backgroundColor: "red" } , style]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",

  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
})