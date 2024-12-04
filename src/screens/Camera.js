import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const IconButton = ({ IconComponent, name, size, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.iconWrapper, style]}>
    <IconComponent name={name} size={size} color="white" />
  </TouchableOpacity>
);

export default function Camera() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />; // Camera permissions are still loading
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        {/* Left Header Section */}
        <View style={styles.headerLeft}>
          <IconButton
            IconComponent={MaterialCommunityIcons}
            name="face-man-profile"
            size={30}
          />
          <IconButton IconComponent={Feather} name="search" size={30} />
        </View>

        {/* Right Header Section */}
        <View style={styles.headerRight}>
          <IconButton IconComponent={Entypo} name="add-user" size={30} />
          <IconButton
            IconComponent={MaterialCommunityIcons}
            name="camera-flip-outline"
            size={30}
            onPress={toggleCameraFacing}
          />
        </View>

        {/* Bottom Button Container */}
        <View style={styles.buttonContainer}>
          <IconButton
            IconComponent={Ionicons}
            name="images-outline"
            size={30}
            style={styles.sideButton}
          />
          <IconButton
            IconComponent={Entypo}
            name="circle"
            size={80}
            style={styles.captureButton}
          />
          <IconButton
            IconComponent={Entypo}
            name="emoji-happy"
            size={30}
            style={styles.sideButton}
          />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  iconWrapper: {
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 5,
  },
  headerLeft: {
    flexDirection: "row",
    position: "absolute",
    top: "5%",
    left: "3%",
  },
  headerRight: {
    flexDirection: "row",
    position: "absolute",
    top: "5%",
    right: "3%",
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: "5%",
    left: "20%",
    right: "20%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sideButton: {
    marginBottom: 20,
    backgroundColor: "rgba(0,0,0,0)",
  },
  captureButton: {
    marginHorizontal: 15,
    backgroundColor: "rgba(0,0,0,0)",
  },
});
