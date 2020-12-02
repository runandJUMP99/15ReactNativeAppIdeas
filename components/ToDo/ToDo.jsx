import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import Note from "./Note";

const ToDo = () => {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState("");

    function addNote() {
        if (noteText) {
            let date = new Date();
            let newNote = {
                note: noteText,
                date: date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
            };

            notes.push(newNote);
            setNoteText("");
        }
    }

    function deleteNote(key) {
        setNotes(notes.filter((note, index) => key !== index));
    }

    function handleChange(enteredText) {
        setNoteText(enteredText);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>- NOTER -</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {notes.map((note, key) => {
                    return <Note key={key} keyval={key} val={note} onDelete={() => deleteNote(key)} />
                })}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput 
                    onChangeText={handleChange}
                    placeholder=">note"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput} 
                    value={noteText}
                />
            </View>
            <TouchableOpacity onPress={addNote} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

styles = StyleSheet.create({
    addButton: {
        alignItems: "center",
        backgroundColor: "#e91e63",
        borderRadius: 50,
        bottom: 90,
        elevation: 8,
        height: 90,
        justifyContent: "center",
        position: "absolute",
        right: 20,
        width: 90,
        zIndex: 11
    },
    addButtonText: {
        color: "white",
        fontSize: 24
    },
    container: {
        flex: 1,
        width: "100%"
    },
    footer: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        zIndex: 10
    },
    header: {
        alignItems: "center",
        backgroundColor: "#e91e63",
        borderBottomColor: "#ddd",
        borderBottomWidth: 10,
        justifyContent: "center"
    },
    headerText: {
        color: "white",
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    textInput: {
        alignSelf: "stretch",
        backgroundColor: "#252525",
        borderTopColor: "#ededed",
        borderTopWidth: 2,
        color: "white",
        padding: 20
    }
});

export default ToDo;