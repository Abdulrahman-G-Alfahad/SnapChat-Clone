import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatItemBox = ({ chat }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate("Single Chat", {
          chat: chat,
        })
      }
    >
      <Image source={{ uri: chat.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{chat.username}</Text>
        <Text style={styles.details}>Details</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItemBox;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
