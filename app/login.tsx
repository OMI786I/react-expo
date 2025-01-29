import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const toSignUp = () => {
    router.navigate("/signup");
  };

  return (
    <View style={styles.container}>
      <Text>login</Text>

      <MyButton title={"Register"} onPress={toSignUp} />
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
