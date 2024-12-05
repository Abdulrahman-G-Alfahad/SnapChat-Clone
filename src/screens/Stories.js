import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FriendsStories from "../data/FriendsStories";
import FollowingStories from "../data/FollowindStories";
import DiscoverStories from "../data/DiscoverStories";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import DiscoverVideoCard from "../components/DiscoverVideoCard";

export default function Stories() {
  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.categoryImage }} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.categoryName}</Text>
    </TouchableOpacity>
  );

  const renderFollowerCard = ({ item }) => (
    <TouchableOpacity style={styles.followerCard}>
      <Image
        source={{ uri: item.followerImage }}
        style={styles.followerImage}
      />
      <Text style={styles.followerText}>{item.followerName}</Text>
    </TouchableOpacity>
  );

  const renderDiscoverCard = ({ item }) => (
    <TouchableOpacity style={styles.discoverCard}>
      <Image
        source={{ uri: item.followerImage }}
        style={styles.discoverImage}
      />
    </TouchableOpacity>
  );

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
        <Text style={styles.headerTitle}>Stories</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Entypo name="add-user" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <AntDesign name="setting" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.friendsText}>Friends</Text>
          <FlatList
            data={FriendsStories}
            renderItem={renderCategoryCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
        </View>
        <View style={{ height: 230 }}>
          <Text style={styles.followingText}>Following</Text>
          <FlatList
            data={FollowingStories}
            renderItem={renderFollowerCard}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
              textAlign: "left",
              marginBottom: 15,
            }}
          >
            For you
          </Text>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  friendsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    marginTop: 20,
  },
  followingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    marginTop: 20,
  },
  discoverText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    alignItems: "center",
    marginRight: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "purple",
  },
  cardText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
  followerCard: {
    alignItems: "center",
    marginRight: 15,
    height: 100,
  },
  followerImage: {
    width: 95,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 5,
  },
  followerText: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
  discoverCard: {
    alignItems: "center",
    marginRight: 15,
  },
  discoverImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "blue",
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
  flatListContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
