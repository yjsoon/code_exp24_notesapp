import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";

export default function NotesScreen({ navigation }) {
  useEffect(() => {});

  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc"
  }
});
