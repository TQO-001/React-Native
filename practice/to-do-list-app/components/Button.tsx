import { Alert, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'

export default function TaskButton({...props}) {
  return (
    <Button 
    onPress={() => Alert.alert('Simple Button pressed')}
    style={styles.button}
    {...props}
    >
      Press me
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#007BFF',
    padding: 10, 
    borderRadius: 8,
  },
});