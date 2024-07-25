import { useState, useEffect, useRef } from "react";
import { Camera, CameraView, FlashMode } from "expo-camera";
import { View, Text, StyleSheet, Button } from "react-native";
import * as MediaLibrary from "expo-media-library";

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState();
  const [flash, setFlash] = useState("off");
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const { status } = await CameraView.setHasCameraPermission(
        status === "granted"
      );
    })();
  }, []);

  const takePicture = async () => {
    console.log("Tomar foto");
    try {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      setImage(photo.uri);
    } catch (error) {
      console.log(error);
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        setImage(null);
        console.log("Foto guardada");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const flashButtton = () => {
    setFlash(flash === "on" ? "off" : "on");
  }
  const typeButton = () => {
    setType(type === "back" ? "front" : "back");
  }
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={type} ref={cameraRef} flash={flash}>
        <View style={styles.viewCamera}>
          <Button title="Flash" onPress={flashButtton}/>
          <Button title={(type === "back"? "Frontal": "Trasera")} onPress={typeButton}/>
        </View>
      </CameraView>
      <View style={styles.buttonContainer}>
        {!!!image ? (
          <View>
            <Button title="Tomar Nuevamente" onPress={takePicture} />
            <Button title="guardar" onPress={savePicture} />
          </View>
        ) : (
          <Button title="Tomar Foto" onPress={takePicture} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    borderRadius: 10,
  },
  viewCamera: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CameraScreen;
