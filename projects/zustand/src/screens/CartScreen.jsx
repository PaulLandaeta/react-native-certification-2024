import { View, ScrollView, Button } from "react-native";
import { useCartStore } from "../store/store";
import ProductCard from "../components/ProductCard";

const CartScreen = () => {
  const cart = useCartStore((state) => state.cart);
  const emptyCart = useCartStore((state) => state.emptyCart);
  return (
    <View>
      <Button title="Vaciar carrito" onPress={emptyCart} />
      <ScrollView>
        {cart.map((product) => (
          <ProductCard hideButton={false} key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CartScreen;
