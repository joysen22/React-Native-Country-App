import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import Details from "./screens/Details";
import { Spacing } from "./themes/Spacing";
import { Color } from "./themes/Color";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function App() {
  // font load..
  const [fontsLoaded] = useFonts({
    "Antonio-Bold": require("./assets/fonts/Antonio-Bold.ttf"),
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Medium": require("./assets/fonts/Spartan-Medium.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Font loding...</Text>;
  }
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
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
