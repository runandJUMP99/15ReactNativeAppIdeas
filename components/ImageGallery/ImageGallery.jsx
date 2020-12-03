import React, {useState} from "react";
import {Dimensions, Modal, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

import ImageElement from "./ImageElement";

const ImageGallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(require("./images/firstplace.png"));
    const images= [
        require("./images/firstplace.png"),
        require("./images/compass.png"),
        require("./images/waifu.jpg"),
        require("./images/yodababy.png"),
        require("./images/bitchbaby.png"),
        require("./images/sopa.jpg"),
    ];

    function handleShowModal(visible, imageKey) {
        setModalImage(images[imageKey]);    
        setShowModal(visible);
    }

    let mappedImages = images.map((image, index) => {
        return (
            <TouchableWithoutFeedback key={index} onPress={() => handleShowModal(true, index)}>
                <View style={styles.imageWrapper}>
                    <ImageElement img={image} />
                </View>
            </TouchableWithoutFeedback>
        );
    });

    return (
        <View style={styles.container}>
            <Modal animationType="fade" onRequestClose={() => {}} style={styles.modal} transparent={true} visible={showModal}>
                <View style={styles.modal}>
                    <Text onPress={() => handleShowModal(false)} style={styles.modalText}>Close</Text>
                    <ImageElement img={modalImage} />
                </View>
            </Modal>
            {mappedImages}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    imageWrapper: {
        backgroundColor: "white",
        height: (Dimensions.get("window").height / 3) - 12,
        margin: 2,
        padding: 2,
        width: (Dimensions.get("window").width / 2) - 4,
    },
    modal: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        flex: 1,
        padding: 40
    },
    modalText: {
        color: "white"
    }
});

export default ImageGallery;