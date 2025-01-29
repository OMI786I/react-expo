import { View, Text, StyleSheet, Image, TextInput } from "react-native";
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
      <Image style={styles.image} source={require("@/assets/login.png")} />
      <View style={{ padding: 10, gap: 10 }}>
        <TextInput placeholder="Enter your Email" style={styles.input} />
        <TextInput placeholder="Enter your Password" style={styles.input} />
        <MyButton title={"login Now"} onPress={toSignUp} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
