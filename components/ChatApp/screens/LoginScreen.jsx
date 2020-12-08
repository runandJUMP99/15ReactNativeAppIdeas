import React, {useState} from "react";
import {Image,  StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const LoginScreen = (props) => {
    const [name, setName] = useState("");

    function handleContinue() {
        props.navigation.navigate("Chat", {name: name})
    }

    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View style={{marginTop: 64}}>
                <Image 
                    source={require("../assets/chat.png")} 
                    style={{alignSelf: "center", height: 100, width: 100}}
                />
                <View style={{marginHorizontal: 32}}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput 
                        onChangeText={name => setName(name)} 
                        placeholder="runandJUMP" 
                        style={styles.input} 
                        value={name}
                    />
                    <View style={{alignItems: "flex-end", marginTop: 64}}>
                        <TouchableOpacity onPress={handleContinue} style={styles.continue}>
                            <Ionicons color="white" name="md-arrow-round-forward" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: "white",
        borderRadius: 500 / 2,
        height: 500,
        left: -120,
        position: "absolute",
        top: -20,
        width: 500
    },
    container: {
        backgroundColor: "#f4f5f7",
        flex: 1
    },
    continue: {
        alignItems: "center",
        backgroundColor: "#9075e3",
        borderRadius: 70 / 2,
        height: 70,
        justifyContent: "center",
        width: 70
    },
    header: {
        color: "#514e5a",
        fontSize: 30,
        fontWeight: "800",
        marginTop: 32
    },
    input: {
        borderColor: "#bab7c3",
        borderRadius: 30,
        borderWidth: StyleSheet.hairlineWidth,
        color: "#514e51",
        fontWeight: "600",
        height: 50,
        marginTop: 32,
        paddingHorizontal: 16
    }
});

export default LoginScreen;