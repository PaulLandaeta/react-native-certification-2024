import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/store";
const ProductsScreen = () => {
  const products = useProductStore((state) => state.products);
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
