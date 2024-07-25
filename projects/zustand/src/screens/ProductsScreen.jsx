import { View, Button, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/store";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import ViewContent from "../components/ViewContent";

const ProductsScreen = () => {
  const products = useProductStore((state) => state.products);
  const { colors, theme, toggleTheme } = useContext(ThemeContext);

  console.log("ProductsScreen -> colors", colors);
  console.log("ProductsScreen -> theme", theme);
  return (
    <ViewContent>
      <View>
        <Button title={theme} onPress={() => toggleTheme()} />
      </View>
      <ScrollView>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </ViewContent>
  );
};

export default ProductsScreen;
