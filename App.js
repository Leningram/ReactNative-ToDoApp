import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";

export default function App() {
    return (
        <View>
            <Navbar title="Todo App!" />
            <View style={styles.container}>
                <AddTodo />
            </View>
        </View>
    );
}
// 1:38

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
