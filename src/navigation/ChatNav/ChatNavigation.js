import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../../screens/Chat";
import SingleChat from "../../screens/SingleChat";

const Stack = createNativeStackNavigator();
const ChatNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Single Chat" component={SingleChat} />
    </Stack.Navigator>
  );
};

export default ChatNavigation;

const styles = StyleSheet.create({});
