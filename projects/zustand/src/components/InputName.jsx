import { View, TextInput } from "react-native";
import { usePersonStore } from "../store/store";
const InputName = () => {
    const setName = usePersonStore((state) => state.setName);
    const name = usePersonStore((state) => state.name);
  return (
    <View>
      <TextInput 
        placeholder="Ingrese el Nombre" 
        value={name}
        onChangeText={setName}
      />
    </View>
  );
};
export default InputName;
