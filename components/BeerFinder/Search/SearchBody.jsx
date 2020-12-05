import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {Content, List, ListItem} from "native-base";

const SearchBody = (props) => {
    const beerData = props.beerData;

    return (
        <Content>
            <List style={{backgroundColor: "white"}}>
                <ListItem itemDivider>
                    <Text>Name</Text>
                </ListItem>
                <ListItem style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <Text>{beerData.name}</Text>
                    </View>
                    <View>
                        <Button title="+ Favorites" />
                    </View>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Category</Text>
                </ListItem>
                <ListItem>
                    <Text>{beerData.style.category.name}</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Description</Text>
                </ListItem>          
                <ListItem>
                    <Text>{beerData.description}</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Rating</Text>
                </ListItem>
                <ListItem>
                    <Text>{beerData.abv}</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Is It Organic?</Text>
                </ListItem>
                <ListItem>
                    <Text>{beerData.isOrganic == "Y" ? "Yes" : "No"}</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Availability</Text>
                </ListItem>
                <ListItem>
                    <Text>{beerData.available.description ? beerData.available.description : "No Info"}</Text>
                </ListItem>
            </List>
        </Content>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default SearchBody;