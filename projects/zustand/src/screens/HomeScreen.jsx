import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Name from "../components/Name";
import InputName from "../components/InputName";
import ButtonZ from "../components/Button";
import {useStore} from "../store/store";
const HomeScreen = () => {
  const [name, setName] = useState("John");
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  const updateBears = useStore((state) => state.updateBears);
  return (
    <View style={styles.container}>
      <Name />
      <InputName/>
      <ButtonZ/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
