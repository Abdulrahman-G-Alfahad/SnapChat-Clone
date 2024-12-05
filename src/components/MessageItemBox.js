import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MessageItemBox = ({ message }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.username}>{message.username}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageBox}>
        <Text style={styles.messageContent}>{message.content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageItemBox;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  username: {
    color: "aqua",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  messageBox: {
    backgroundColor: "lightgrey",
    padding: 8,
    borderLeftWidth: 4,
    borderLeftColor: "aqua",
    borderRadius: 4,
  },
  messageContent: {
    fontSize: 16,
    color: "#000",
  },
});
