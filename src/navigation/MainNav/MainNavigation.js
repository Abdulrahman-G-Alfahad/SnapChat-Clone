import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Camera from "../../screens/Camera";
import Feather from "@expo/vector-icons/Feather";
import Map from "../../screens/Map";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "yellow", // Selected tab item color
        tabBarInactiveTintColor: "white", // Unselected tab item color
        headerTransparent: true,
        headerStyle: { backgroundColor: "transparent" }, // Transparent header
        // headerTintColor: "white", // Adjust text/icon color for header
        // headerTitleStyle: { fontWeight: "bold" },
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
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="camera" size={size} color={color} />
          ),
          title: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
