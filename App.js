import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import Card from "./components/Card";
import { dogs } from "./data";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ marginHorizontal: 18 }}
        style={{ marginTop: Platform.OS === "android" && 30 }}
      >
        {dogs.map((dog, index) => (
          <Card key={index} {...dog} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
