import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function Camera() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: "5%",
            left: "3%",
          }}
        >
          <View
            style={{
              borderRadius: 15,
              width: 30,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: 10 }} />
          <View
            style={{
              borderRadius: 15,
              width: 30,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <TouchableOpacity>
              <Feather name="search" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: "5%",
            left: "87%",
          }}
        >
          <View
            style={{
              borderRadius: 15,
              width: 30,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <TouchableOpacity>
              <Entypo name="add-user" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ width: 10 }} />

          <View
            style={{
              borderRadius: 15,
              width: 30,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <TouchableOpacity onPress={toggleCameraFacing}>
              <MaterialCommunityIcons
                name="camera-flip-outline"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Ionicons
              name="images-outline"
              size={30}
              color="white"
              style={{ marginBottom: 20, marginRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="circle" size={80} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="emoji-happy"
              size={30}
              color="white"
              style={{ marginLeft: 20, marginBottom: 20 }}
            />
          </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: "row",
    position: "absolute", // Make the container position relative to the screen
    bottom: "5%", // Adjust the distance from the bottom of the screen
    left: "37%",
    right: 0,
    alignItems: "center", // Center the button horizontally
    padding: 2,
  },
});
