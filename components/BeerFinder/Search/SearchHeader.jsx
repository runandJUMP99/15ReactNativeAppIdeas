import React from "react";
import {StyleSheet, View} from "react-native";
import {Header, Icon, Input, Item} from "native-base";

const SearchHeader = (props) => {
    return (
        <Header rounded searchBar style={{height: 80}}>
            <Item>
                <Icon name="ios-search" />
                <Input 
                    onChangeText={props.onChangeText} 
                    onSubmitEditing={props.beerSearch}
                    placeholder="Enter Beer Name" 
                    returnKeyType="search" 
                />
            </Item>
        </Header>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default SearchHeader;