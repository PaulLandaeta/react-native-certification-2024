import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
const ProductsScreen = () => {
  const product = {
    name: "Product 1",
    price: 100,
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductsScreen;
