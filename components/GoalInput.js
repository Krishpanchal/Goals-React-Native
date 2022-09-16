import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, closeModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState();

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (!enteredGoalText) return;
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder='Add Goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={closeModal} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
