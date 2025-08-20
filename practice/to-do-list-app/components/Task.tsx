import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native'
import CustomButton from './CustomButton'; // Ensure the path is correct
import React from 'react'

export default function Task({ description = "Task" }) {
  return (
    <View style={styles.container}>
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{description}</Text>
        </View>
        <CustomButton 
        title="Complete"
        style={styles.button} 
        onPress={() => console.log("Task completed")}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    taskContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 10,
        marginRight: 10,
        width: "90%",
        padding: 10,
        borderRadius: 8,
        overflow: "hidden",
        },
    taskText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 500,
    }, 
    button: {
        backgroundColor: "#02c01cff",
        marginVertical: 10,
    },
})