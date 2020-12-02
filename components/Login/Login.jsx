import React from "react";
import {Image, StatusBar, StyleSheet, Text, View} from "react-native";

import Form from "./Form/Form";

const Login = () => {
    return (
        <View style={styles.login}>
            <StatusBar barStyle="light-content" />
            <View style={styles.logo}>
                <Image source={require("../../assets/favicon.png")} />
                <Text style={styles.caption}>An App Made Using React Native</Text>
            </View>
            <View style={styles.form}>
                <Form />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    caption: {
        color: "white",
        marginTop: 10,
        opacity: 0.8,
        textAlign: "center",
        width: 140
    },
    login: {
        backgroundColor: '#bedcfa',
        flex: 1,
        justifyContent: 'center',
        width: "100%"
    },
    logo: {
        alignItems: "center",
        justifyContent: "center",
    }
});


export default Login;