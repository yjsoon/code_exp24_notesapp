import { View, Text, Pressable, StyleSheet } from "react-native";

export default function AddNoteScreen() {
  return (
    <View style={styles.container}>
      <Text>AddNoteScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
