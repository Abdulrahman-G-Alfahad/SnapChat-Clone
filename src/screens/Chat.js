import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import ChatItemBox from "../components/ChatItemBox";
import chatsData from "../../data/chatsData";

const Chat = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons
              name="face-man-profile"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <Feather name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Chat</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Entypo name="add-user" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <AntDesign name="setting" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Section */}
      <ScrollView style={styles.content}>
        <View style={styles.chatList}>
          {chatsData?.map((chat) => (
            <ChatItemBox chat={chat} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    position: "absolute",
    top: "4%",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: 1,
  },
  headerLeft: {
    flexDirection: "row",
  },
  headerRight: {
    flexDirection: "row",
  },
  iconWrapper: {
    marginHorizontal: 5,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 5,
    borderRadius: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  content: {
    flex: 1,
    marginTop: "15%",
  },
  chatList: {
    paddingHorizontal: 15,
  },
});
