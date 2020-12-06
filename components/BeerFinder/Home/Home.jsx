import React, {useEffect} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Button} from "native-base"
import * as firebase from "firebase";


const Home = (props) => {
    useEffect(() => {
        firebase.auth().signInWithEmailAndPassword("stevendvelez9@gmail.com", "password");
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../images/home.jpg")} style={styles.image} />
            </View>
            <Button block={true} onPress={() => props.navigation.navigate("Search")}>
                <Text style={styles.buttonText}>Search Beers</Text>
            </Button>
        </View>
    );
}

Home["navigationOptions"] = screenProps => ({
    headerShown: false
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    buttonText: {
        color: "white"
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    imageContainer: {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
    }
});

export default Home;