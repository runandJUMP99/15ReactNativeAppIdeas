import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const Form = () => {
    return (
        <View style={styles.form}>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onSubmitEditing={() => this.passwordInput.focus()}
                placeholder="Username or Email" 
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                returnKeyType="next"
                style={styles.input} 
            />
            <TextInput 
                placeholder="Password" 
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                ref={(input) => this.passwordInput = input}
                returnKeyType="done"
                secureTextEntry
                style={styles.input} 
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: "#0e49b5",
      paddingVertical: 15
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        textAlign: "center"
    },
    form: {
        padding: 20
    },
    input: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "white",
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: "100%"
    }
});

export default Form;