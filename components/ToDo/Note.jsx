import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Note = (props) => {
    return (
        <View key={props.keyval} style={styles.container}>
            <Text style={styles.noteText}>{props.val.date}</Text>
            <Text style={styles.noteText}>{props.val.note}</Text>
            <TouchableOpacity onPress={props.onDelete} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>D</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#ededed",
        borderBottomWidth: 2,
        padding: 20,
        paddingRight: 100,
        position: "relative"
    },
    noteDelete: {
        alignItems: "center",
        backgroundColor: "#2980b9",
        bottom: 10,
        justifyContent: "center",
        padding: 10,
        position: "absolute",
        right: 10,
        top: 10,
    },
    noteDeleteText: {
        color: "white"
    },
    noteText: {
        borderLeftColor: "#e91e63",
        borderLeftWidth: 10,
        paddingLeft: 20
    }
});

export default Note;