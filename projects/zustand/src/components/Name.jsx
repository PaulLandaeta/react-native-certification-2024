import { View, Text } from "react-native";
import { usePersonStore } from "../store/store";
const Name = () => {
  const name = usePersonStore((state) => state.name);
  return (
    <View>
      <Text>Hola {name}</Text>
    </View>
  );
};
export default Name;
