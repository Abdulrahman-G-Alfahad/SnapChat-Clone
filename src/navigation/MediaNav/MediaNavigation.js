import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stories from "../../screens/Stories";
import MediaViewer from "../../screens/MediaViewer";
import Discover from "../../screens/Discover";

const Stack = createNativeStackNavigator();
const MediaNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Stories"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Stories" component={Stories} />
      <Stack.Screen name="MediaViewer" component={MediaViewer} />
      <Stack.Screen name="Discover" component={Discover} />
    </Stack.Navigator>
  );
};

export default MediaNavigation;

const styles = StyleSheet.create({});
