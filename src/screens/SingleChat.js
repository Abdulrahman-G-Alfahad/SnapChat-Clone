import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const IconButton = ({ IconComponent, name, size, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.iconButton, style]}>
    <IconComponent name={name} size={size} color="#262626" />
  </TouchableOpacity>
);

const SingleChat = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.username}>Username</Text>
            <Text style={styles.time}>7h ago</Text>
          </View>
        </View>
        <IconButton IconComponent={Feather} name="more-vertical" size={24} />
      </View>

      {/* Text Input Section */}
      <View style={styles.textBoxContainer}>
        <IconButton
          IconComponent={Feather}
          name="smile"
          size={24}
          style={styles.leftIcon}
        />
        <TextInput
          style={styles.textBox}
          placeholder="Send a chat..."
          placeholderTextColor="#8E8E8E"
        />
        <View style={styles.rightIcons}>
          <IconButton IconComponent={Feather} name="camera" size={24} />
          <IconButton IconComponent={Feather} name="send" size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: "absolute",
    top: "5%",
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontWeight: "600",
    fontSize: 16,
    color: "#262626",
  },
  time: {
    fontSize: 12,
    color: "#8E8E8E",
  },
  textBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    marginBottom: 0,
    position: "absolute",
    bottom: "5%",
  },
  leftIcon: {
    marginRight: 8,
  },
  textBox: {
    flex: 1,
    fontSize: 16,
    color: "#262626",
    borderRadius: 25,
    backgroundColor: "#F5F5F5",
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginHorizontal: 4,
  },
});

export default SingleChat;
