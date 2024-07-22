import React, { useEffect } from "react";
import { View, Image, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useImageColors } from "../hooks/useImageColors";
import LinearGradient from "react-native-linear-gradient";

const PortadaScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const colorSetup = useImageColors(item);
  console.log("🚀 ~ PortadaScreen ~ backgroundColor:", colorSetup);
  useEffect(() => {
    if (colorSetup) {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: colorSetup.background,
        },
        headerTintColor: "#fff",
      });
    }
  }, [colorSetup, navigation]);

  return (
    <LinearGradient
      colors={[colorSetup.background || "#fff", "#fff"]}
      style={styles.gradient}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor="black"
          barStyle="light-content"
          hidden={false}
        />

        <View
          style={{
            backgroundColor: colorSetup.background || "#fff",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            justifyContent: "flex-end",
          }}
        >
          <Image
            source={{ uri: item }}
            style={{
              width: 300,
              height: 380,
              borderRadius: 18,
            }}
          />
        </View>

        <View style={{ flex: 1 }}></View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end", // Alinea la imagen al centro vertical de la pantalla
    marginBottom: 50, // Ajusta este valor según lo que necesites
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 18,
  },
});

export default PortadaScreen;
