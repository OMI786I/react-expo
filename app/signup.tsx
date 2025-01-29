import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();
  const toLogin = () => {
    router.navigate("/login");
  };
  return (
    <View style={styles.container}>
      <Text>signup</Text>

      <MyButton title={"login Now"} onPress={toLogin} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
