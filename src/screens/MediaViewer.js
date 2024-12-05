import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MediaViewer = ({ route }) => {
  const { card } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: card.image }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.text}>{card.title}</Text>
      </View>
    </View>
  );
};

export default MediaViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
