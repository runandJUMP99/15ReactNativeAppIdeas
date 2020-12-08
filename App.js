import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import ChatScreen from "./components/ChatApp/screens/ChatScreen";
import LoginScreen from "./components/ChatApp/screens/LoginScreen";
import Home from "./components/BeerFinder/Home/Home";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Login from "./components/Login/Login";
import MovieApp from "./components/MovieApp/MovieApp";
import Search from "./components/BeerFinder//Search/Search";
import ToDo from "./components/ToDo/ToDo";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ImageGallery />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: 20
//   }
// });

// const BeerFinder = createStackNavigator({
//   Home: {screen: Home},
//   Search: {screen: Search}
// }, {
//   initialRouteName: "Home"
// });

// export default createAppContainer(BeerFinder);

const ChatApp = createStackNavigator({
  Login: LoginScreen,
  Chat: ChatScreen
}, {
  headerMode: "none"
});

export default createAppContainer(ChatApp);