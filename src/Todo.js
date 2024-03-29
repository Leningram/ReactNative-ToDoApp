import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log("Visual", todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 5,
        marginBottom: 10
    }
});
