import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FriendsStories from "../data/FriendsStories";
import FollowingStories from "../data/FollowindStories";
import DiscoverStories from "../data/DiscoverStories";

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stories</Text>
      <Text style={styles.friendsText}>Friends</Text>
      <FlatList
        data={FriendsStories}
        renderItem={renderCategoryCard}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
      <Text style={styles.followingText}>Following</Text>
      <FlatList
        data={FollowingStories}
        renderItem={renderFollowerCard}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
      <Text style={styles.discoverText}>Discover</Text>
      <FlatList
        data={DiscoverStories}
        renderItem={renderDiscoverCard}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
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
    marginBottom: 5,
    color: "#333",
    textAlign: "center",
    padding: 20,
  },
  friendsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginBottom: 15,
  },
  followingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginBottom: 15,
  },
  discoverText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginBottom: 15,
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
    // borderRadius: 30,
    // borderWidth: 2,
    borderColor: "gray",
    marginBottom: 5,
    borderRadius: 10,
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
});
