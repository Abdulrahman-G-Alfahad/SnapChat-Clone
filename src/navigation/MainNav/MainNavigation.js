import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Camera from "../../screens/Camera";
import Feather from "@expo/vector-icons/Feather";
import Map from "../../screens/Map";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Chat from "../../screens/Chat";
import ChatNavigation from "../ChatNav/ChatNavigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import Discover from "../../screens/Discover";
import Stories from "../../screens/Stories";
import MediaNavigation from "../MediaNav/MediaNavigation";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  const [color, setColor] = useState("yellow");
  return (
    <Tab.Navigator
      initialRouteName="Camera"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: color,
        tabBarInactiveTintColor: "white",
        headerTransparent: true,
        headerStyle: { backgroundColor: "transparent" },
      })}
    >
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map-pin" size={size} color={color} />
          ),
          title: "",
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-reply-outline"
              size={size}
              color={color}
            />
          ),
          title: "",
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="camera" size={size} color={color} />
          ),
          title: "",
        }}
      />

      <Tab.Screen
        name="Users"
        component={MediaNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="users" size={size} color={color} />;
          },
          title: "",
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-outline" size={size} color={color} />
          ),
          title: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
