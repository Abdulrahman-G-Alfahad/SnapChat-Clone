import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/navigation/MainNav/MainNavigation";
import Stories from "./src/screens/Stories";

export default function App() {
  return (
    <NavigationContainer>
     
      <MainNavigation />
<<<<<<< HEAD
=======
{/* <Stories/> */}

>>>>>>> main
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
