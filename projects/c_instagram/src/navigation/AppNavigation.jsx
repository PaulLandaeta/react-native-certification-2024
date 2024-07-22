import { Footer } from "../layout/Footer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentProfile from "../screens/StudentProfile";
import PortadaScreen from "../screens/PortadaScreen";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tab" component={Footer} />
      <Stack.Screen name="studentProfile" component={StudentProfile} />
      <Stack.Screen name="portadaScreen" component={PortadaScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
