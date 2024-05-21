import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function AddNoteScreen() {
  const [title, onChangeTitle] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add your note here</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(newText) => onChangeTitle(newText)}
      />
      <View style={styles.buttons}>
        <Pressable
          onPress={() => {}}
          style={[styles.button, styles.submitButton]}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontWeight: "bold",
    fontSize: 24
  },
  textInput: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    borderColor: "#ccc"
  },
  buttons: {
    flexDirection: "row",
    gap: 20
  },
  button: {
    padding: 20,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: "green"
  },
  cancelButton: {
    backgroundColor: "red"
  },
  buttonText: {
    color: "#fff",
    fontSize: 24
  }
});
