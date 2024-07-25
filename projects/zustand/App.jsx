import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartScreen from "./src/screens/CartScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
// simulando una base de datos API
import { products } from "./src/data/products";

import { useEffect } from "react";
import { useProductStore } from "./src/store/store";
import CameraScreen from "./src/screens/CameraScreen";
import { ThemeProvider } from "./src/context/ThemeContext";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Product" component={ProductsScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};
const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const CameraStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  // get products from API
  const setProducts = useProductStore((state) => state.setProducts);
  useEffect(() => {
    setProducts(products);
  }, []);

  return (
    <ThemeProvider> 
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Productos" component={ProductStack} />
          <Tab.Screen name="Carrito" component={CartStack} />
          <Tab.Screen name="Camara" component={CameraStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
