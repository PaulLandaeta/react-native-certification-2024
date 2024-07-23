import { Button } from "react-native";
import { usePersonStore } from "../store/store";
const ButtonZ = () => {
  const setName = usePersonStore((state) => state.setName);
  return <Button 
            title="RESET"
            onPress={() => setName("")}
        />;
};
export default ButtonZ;
