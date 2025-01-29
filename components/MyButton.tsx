import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MyButton = ({ title }) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
});
export default MyButton;
