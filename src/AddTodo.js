import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue("");
        } else {
            Alert.alert("Название задачи не может быть пустым");
        }
    };

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите название задачи"
                autoCorrect={false}
            />
            <Button title="Добавить" onPress={pressHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab"
    }
});
