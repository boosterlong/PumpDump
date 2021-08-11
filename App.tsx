import { IconButton, Colors, Title, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Clipboard, { setString } from 'expo-clipboard';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { generateWorkout } from './functions'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

let currentPlan:string = ""

export default function App() {
  const [result, setResult] = useState("");
  function createPlan(lift:string) {
    currentPlan = generateWorkout(`${lift}`);
    return currentPlan
  }
  const CopyMessage = async () => {
    Clipboard.setString(this.state.message)
}
  function copyToClipboard() {
    setString(currentPlan)
    alert("Copied to clipboard.")
  }


  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
      <Title style={styles.mainText}>Powerlifting{'\n'}Workout Generator</Title>
      <IconButton
    style={styles.copyButton}
    icon="clipboard"
    color={Colors.blue500}
    size={'10vh'}
    onPress={() => copyToClipboard()}
      />
      <TouchableOpacity onPress={()=>setResult(`${createPlan('squat')}`)} style={[styles.mainButton, styles.leftButton]}>Squat</TouchableOpacity>
      <TouchableOpacity onPress={()=>setResult(`${createPlan('bench')}`)} style={styles.mainButton}>Bench</TouchableOpacity>
      <TouchableOpacity onPress={()=>setResult(`${createPlan('deadlift')}`)} style={[styles.mainButton, styles.rightButton]}>Deadlift</TouchableOpacity>
      <Text style={styles.workoutPlan}>{result}</Text>
      <StatusBar style="auto" />
    </View>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButton: {
    justifyContent: 'center',
    backgroundColor: 'black',
    border: '2px solid grey',
    borderRadius: 5,
    color: 'white',
    minWidth: '30vw',
    textAlign: 'center',
    paddingTop: '5vw',
    paddingBottom: '5vw',
    position: 'absolute',
    fontSize: '2vh',
    bottom: '4vh'
  },
  leftButton: {
    left: '4vw'
  },
  rightButton: {
    right: '4vw'
  },
  workoutPlan: {
    fontSize: '4vh',
    marginHorizontal: '2vw',
    position: 'absolute',
    top: '15vh'
  },
  mainText: {
    fontSize: '3vh',
    position: 'absolute',
    top: '2vh'
  },
  copyButton: {
    position: 'absolute',
    right: '10vw',
    bottom: '15vh'
  }
});
