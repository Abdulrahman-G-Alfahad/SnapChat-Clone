import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const IconButton = ({ IconComponent, name, size, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
    <IconComponent name={name} size={size} color="white" />
  </TouchableOpacity>
);

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.headerLeft}>
        <IconButton
          IconComponent={MaterialCommunityIcons}
          name="face-man-profile"
          size={30}
        />
        <IconButton IconComponent={Feather} name="search" size={30} />
      </View>

      <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>KUWAIT</Text>
      </View>

      <View style={styles.headerRight}>
        <IconButton IconComponent={Entypo} name="add-user" size={30} />
        <IconButton IconComponent={AntDesign} name="setting" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  headerLeft: {
    flexDirection: "row",
    position: "absolute",
    top: "5%",
    left: "3%",
  },
  headerCenter: {
    position: "absolute",
    top: "5%",
    left: "43%",
  },
  headerRight: {
    flexDirection: "row",
    position: "absolute",
    top: "5%",
    right: "3%",
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  iconWrapper: {
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 5,
  },
});
