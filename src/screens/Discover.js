import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import DiscoverVideoCard from "../components/DiscoverVideoCard";
import discoverCards from "../../data/discoverCards";

const Discover = () => {
  const renderItem = ({ item }) => <DiscoverVideoCard card={item} />;

  return (
    <View style={styles.container}>
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
        <Text style={styles.headerTitle}>Discover</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Entypo name="add-user" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.headerTwo}>For you</Text>
      <FlatList
        data={discoverCards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.flatListColumn}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
    color: "white",
  },
  headerTwo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: "15%",
    marginBottom: 10,
    marginLeft: "2%",
  },
  flatListContainer: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  flatListColumn: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
