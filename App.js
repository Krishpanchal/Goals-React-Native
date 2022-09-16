import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
    closeAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prev) => {
      return prev.filter((el) => el.key !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const closeAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          closeModal={closeAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
    marginTop: 10,
  },
});

// Notes
{
  /* ScrollView :- not good for many items */
}

{
  /* <ScrollView>
          {courseGoals.map((goal, i) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText} key={i}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView> */
}

{
  /* FlatList for optimization for many items if used */
}
