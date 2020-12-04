import React from "react";
import {StyleSheet, Text} from "react-native";
import {Button, Footer, FooterTab, Icon} from "native-base";
import {createBottomTabNavigator} from "react-navigation-tabs";

import FavoritesTab from "./TabNavigator/FavoritesTab";
import SearchTab from "./TabNavigator/SearchTab";

const Search = createBottomTabNavigator({
    SearchTab: {screen: SearchTab},
    FavoritesTab: {screen: FavoritesTab}
}, {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button active={props.navigation.state.index === 0} onPress={() => props.navigation.navigate("SearchTab")} vertical >
                        <Icon name="beer" />
                        <Text>Search</Text>
                    </Button>
                    <Button active={props.navigation.state.index === 1} onPress={() => props.navigation.navigate("FavoritesTab")} vertical >
                        <Icon name="star" />
                        <Text>Favorites</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
});

const styles = StyleSheet.create({
    container: {

    }
});

export default Search;