import MyButton from "@/components/MyButton";
import { View, Text, StyleSheet } from "react-native";
import Login from "./login";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to basic login and signup project</Text>

      <MyButton title={"Login"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
