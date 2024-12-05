import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Camera from "../../screens/Camera";
import Feather from "@expo/vector-icons/Feather";
import Map from "../../screens/Map";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Chat from "../../screens/Chat";
import ChatNavigation from "../ChatNav/ChatNavigation";
import Stories from "../../screens/Stories";


const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "yellow",
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
        name="Chat"
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
        component={Stories}
        options={{
          tabBarIcon: () => {
            return <Feather name="users" size={24} color="white" />;
          },
          title: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
