import { View, ScrollView, Button } from "react-native";
import { useCartStore } from "../store/store";
import ProductCard from "../components/ProductCard";
import ViewContent from "../components/ViewContent";

const CartScreen = () => {
  const cart = useCartStore((state) => state.cart);
  const emptyCart = useCartStore((state) => state.emptyCart);
  return (
    <ViewContent>
      <Button title="Vaciar carrito" onPress={emptyCart} />
      <ScrollView>
        {cart.map((product) => (
          <ProductCard hideButton={false} key={product.id} product={product} />
        ))}
      </ScrollView>
    </ViewContent>
  );
};

export default CartScreen;
