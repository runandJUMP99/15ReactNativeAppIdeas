import React from "react";
import {StyleSheet, View} from "react-native";

const SearchTab = () => {
    return (
        <View style={styles.container}>

        </View>
    );
}

SearchTab["navigationOptions"] = screenProps => ({
    headerShown: false
});

styles = StyleSheet.create({
    container: {

    }
});

export default SearchTab;