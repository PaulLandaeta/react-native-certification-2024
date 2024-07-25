import { View, Text, StyleSheet, Pressable } from "react-native";
import { useContext } from "react";

import { useCartStore } from "../store/store";
import { ThemeContext } from "../context/ThemeContext";
import Title from "./Title";

const ProductCard = ({ product, hideButton = true }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { colors } = useContext(ThemeContext);
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.backgroundColorCard,
      }}
    >
      <View>
        <Title texto={product.name} />
        <Title texto={product.price} />
      </View>
      <View>
        <Title texto={product.name} />
        <Title texto={product.price} />
      </View>
      {hideButton && (
        <View>
          <Pressable style={styles.buyButton} onPress={() => handleAddToCart()}>
            <Text style={{ color: "white" }}>Comprar</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    width: "90%",
    backgroundColor: "black",
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
  text: {
    fontSize: 16,
  },
});
export default ProductCard;
