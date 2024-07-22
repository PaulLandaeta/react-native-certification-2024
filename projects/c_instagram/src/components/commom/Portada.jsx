import { View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const portadaDefault =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ovWpLf5zwOjc9IYdm_ci5imEzZM1POP6-Q&s";
const Portada = ({ image = portadaDefault, stylesPortada = {} }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("portadaScreen", {item: image})}>
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={{
            ...styles.image,
            ...stylesPortada,
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  image: {
    borderRadius: 18,
    width: 150,
    height: 250,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
});
export default Portada;
