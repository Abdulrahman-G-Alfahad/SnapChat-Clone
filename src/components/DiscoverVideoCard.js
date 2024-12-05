import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DiscoverVideoCard = ({ card }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: card.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{card.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DiscoverVideoCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#222",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 9 / 16,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
