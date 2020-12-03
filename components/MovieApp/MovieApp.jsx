import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet, TextInput, View} from "react-native";

import ImageElement from "./ImageElement";

const MovieApp = () => {
    const [imagesRef, setImagesRef] = useState([]);
    const [text, setText] = useState("");
    const [images, setImages] = useState([
        {title: "After", img: require("./images/after.jpg")},
        {title: "Aladdin", img: require("./images/aladdin.jpg")},
        {title: "Black Panther", img: require("./images/black-panther.jpg")},
        {title: "Dora and the Lost City of Gold", img: require("./images/dora-and-the-lost-city-of-gold.jpg")},
        {title: "Jaws", img: require("./images/jaws.jpg")},
        {title: "Moonlight", img: require("./images/moonlight.jpg")},
        {title: "Project Power", img: require("./images/project-power.jpg")},
        {title: "Replicas", img: require("./images/replicas.jpg")},
        {title: "Jaws", img: require("./images/jaws.jpg")},
        {title: "Dora and the Lost City of Gold", img: require("./images/dora-and-the-lost-city-of-gold.jpg")}
    ]);

    useEffect(() => {
        setImagesRef(images);
    }, []);

    function searchHandler(text) {
        setText(text);

        for (let i = 0; i < images.length; i++) {
            if (text === images[i].title) {
                setImages([images[i]]);
            }
        }

        if (!text) {
            setImages(imagesRef);
        }
    }

    let mappedImages = images.map((image, index) => {
        return (
            <View key={index} style={styles.imageWrapper}>
                <ImageElement img={image.img} />
            </View>
        );
    });

    return (
        <View style={styles.container}>
            <TextInput 
                onChangeText={(text) => searchHandler(text)} 
                placeholder="Search Movie" 
                style={styles.textInput} 
                underlineColorAndroid="transparent" 
                value={text}
            />
            <View style={styles.photoGrid}>
                {mappedImages}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#252525",
        flex: 1,
        width: "100%"
    },
    imageWrapper: {
        height: 120,
        padding: 2,
        width: (Dimensions.get("window").width / 2) - 2
    },
    photoGrid: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 2
    },
    textInput: {
        backgroundColor: "white",
        marginBottom: 8,
        marginTop: 10,
        padding: 10,
        textAlign: "center"
    }
});

export default MovieApp;