import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: "5%",
          left: "3%",
        }}
      >
        <View
          style={{
            borderRadius: 15,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="face-man-profile"
              size={30}
              color="white"
              style={{ opacity: 1 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: 10 }} />
        <View
          style={{
            borderRadius: 15,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <TouchableOpacity style={{}}>
            <Feather
              name="search"
              size={30}
              color="white"
              style={{ opacity: 1 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: "absolute", top: "5%", left: "42%" }}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          KUWAIT
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: "5%",
          left: "87%",
        }}
      >
        <View
          style={{
            borderRadius: 15,
            width: 30,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="add-user"
              size={30}
              color="white"
              style={{ opacity: 1 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: 10 }} />
        <View
          style={{
            borderRadius: 15,
            width: 30,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <TouchableOpacity>
            <AntDesign
              name="setting"
              size={33}
              color="white"
              style={{ opacity: 1 }}
            />
          </TouchableOpacity>
        </View>
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
});
