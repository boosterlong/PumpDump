import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { tierOneLifts, squatTierTwo } from './workouts'
import { getRandomInt, generateWorkout } from './functions'

let result = "Placeholder"

export default function App() {
  const [result, setResult] = useState("Placeholder");
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>setResult("New Placeholder")} style={styles.mainbutton}>Squat Workout</TouchableOpacity>
      <TouchableOpacity onPress={()=>setResult("New Placeholder")} style={styles.mainbutton}>Bench Workout</TouchableOpacity>
      <TouchableOpacity onPress={()=>setResult("New Placeholder")} style={styles.mainbutton}>Deadlift Workout</TouchableOpacity>
      {result}
      {/*<Text>{generateWorkout(tierOneLifts[getRandomInt(tierOneLifts.length)])}</Text>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainbutton: {
    backgroundColor: 'black',
    border: '2px solid grey',
    borderRadius: 5,
    color: 'white',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: '5vw',
    paddingBottom: '5vw',

  }
});
