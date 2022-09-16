import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, id, onDeleteGoal }) => {
  const handleGoalItemPress = () => {
    onDeleteGoal(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={handleGoalItemPress}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
