import React, {useState} from "react";
import {Keyboard} from "react-native";
import {Container, Content} from "native-base";
import axios from "axios";

import SearchBody from "../SearchBody";
import SearchHeader from "../SearchHeader";

const SearchTab = () => {
    const [searchBeer, setSearchBeer] = useState("");
    const [beer, setBeer] = useState(null);

    function beerSearch() {
        Keyboard.dismiss();
        const beerName = searchBeer.toLowerCase();
        const query = "https://sandbox-api.brewerydb.com/v2/search?q=" + beerName + "&type=beer&key=01785c8a33163cdc3e7dbfc8f9c43f7e";

        axios.get(query)
            .then(res => {
                let beerData = res.data.data[0] ? res.data.data[0] : false;
                
                if (beerData) {
                    setBeer(<SearchBody beerData={beerData} />);
                }
            })
            .catch(err => {
                setBeer(null);
                alert("Beer Not Found");
            });
    }

    return (
        <Container>
            <SearchHeader 
                beerSearch={beerSearch}
                onChangeText={(searchBeer) => setSearchBeer(searchBeer)} 
                value={searchBeer} 
            />
            <Content>
                {beer}
            </Content>
        </Container>
    );
}

SearchTab["navigationOptions"] = screenProps => ({
    headerShown: false
});

export default SearchTab;