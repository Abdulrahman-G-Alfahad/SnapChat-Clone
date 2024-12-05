import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import MessageItemBox from "../components/MessageItemBox";

const IconButton = ({ IconComponent, name, size, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.iconButton, style]}>
    <IconComponent name={name} size={size} color="#262626" />
  </TouchableOpacity>
);

const SingleChat = ({ route }) => {
  const { chat } = route.params;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: chat.image }} style={styles.profileImage} />
          <View>
            <Text style={styles.username}>{chat.username}</Text>
            <Text style={styles.time}>7h ago</Text>
          </View>
        </View>
        <IconButton IconComponent={Feather} name="more-vertical" size={24} />
      </View>

      {/* Message Display Section */}
      <ScrollView style={styles.messagesContainer}>
        {chat.chats?.map((message, index) => (
          <MessageItemBox
            key={
              message.id + " " + message.username ||
              index + " " + message.username
            }
            message={message}
          />
        ))}
      </ScrollView>

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
          <TouchableOpacity>
            <IconButton IconComponent={Feather} name="camera" size={24} />
          </TouchableOpacity>
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
    paddingTop: "5%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
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
  messagesContainer: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 60,
  },
  textBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 12,
    position: "absolute",
    bottom: 16,
  },
  leftIcon: {
    marginRight: 8,
  },
  textBox: {
    flex: 1,
    fontSize: 16,
    color: "#262626",
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    backgroundColor: "#FFF",
    backgroundColor: "#F5F5F5",
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
