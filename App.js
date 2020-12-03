import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Login from "./components/Login/Login";
import MovieApp from "./components/MovieApp/MovieApp";
import ToDo from "./components/ToDo/ToDo";

export default function App() {
  return (
    <View style={styles.container}>
      <MovieApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20
  }
});