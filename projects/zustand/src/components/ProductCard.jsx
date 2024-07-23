import { View, Text, StyleSheet, Pressable } from "react-native";
const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </View>
      <View>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </View>
      <View>
        <Pressable
          style={styles.buyButton}
          onPress={() => console.log("Pressed")}
        >
          <Text style={{ color: "white" }}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    width: "90%",
    backgroundColor: "#6EACDA",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buyButton: {
    backgroundColor: "#021526",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
export default ProductCard;
