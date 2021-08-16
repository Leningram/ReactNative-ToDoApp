import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                text
            }
        ]);
    };

    return (
        <View>
            <Navbar text="Todo App!!" />
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />

                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={todos}
                    renderItem={({ item }) => <Todo todo={item} />}
                />
            </View>
        </View>
    );
}
// 2:02

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
