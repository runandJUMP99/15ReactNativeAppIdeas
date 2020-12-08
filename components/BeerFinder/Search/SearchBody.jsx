import React from "react";
import {Button, Image, Text, View} from "react-native";
import {Content, List, ListItem} from "native-base";
// import * as firebase from "firebase";

const SearchBody = (props) => {
    const beerData = props.beerData;
    let currentUser;

    const addToFavorites = async(beerName) => {
        // //get current user
        // currentUser = await firebase.auth().currentUser;

        // //get a unique key
        // let databaseRef = await firebase.database().ref(currentUser.uid).child("favorites").push();

        // //update beerName at unique key
        // databaseRef.set({
        //     name: beerName
        // });
    }

    return (
        <Content>
            <ListItem itemDivider style={{flexDirection: "row", justifyContent: "center"}}>
                <Image source={{uri: beerData.labels && beerData.labels.large}} style={{height: 200, width: 200}} />
            </ListItem>
            <List style={{backgroundColor: "white"}}>
                <ListItem itemDivider>
                    <Text>Name</Text>
                </ListItem>
                <ListItem style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <Text>{beerData.name}</Text>
                    </View>
                    <View>
                        <Button onPress={() => addToFavorites(beerData.name)} title="+ Favorites" />
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
                    <Text>{beerData.available && (beerData.available.description ? beerData.available.description : "No Info")}</Text>
                </ListItem>
            </List>
        </Content>
    );
}

export default SearchBody;