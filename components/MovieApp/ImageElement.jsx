import React from "react";
import {Image, StyleSheet} from "react-native";

const ImageElement = (props) => {
    return (
        <Image source={props.img} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        alignSelf: "stretch",
        flex: 1,
        width: null
    }
});

export default ImageElement;