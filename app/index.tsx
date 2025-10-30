import React, {useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
    


export default function PetRockSimulator() {
    const [happiness, setHappiness] = useState(0-100);
    const [hunger, setHunger] = useState(50);
    const [message, setMessage] = useState("Pet Rocko...");

    const feedRock = () => {
        setHunger(Math.max(100, happiness + 20));
        setHappiness(Math.min(100, happiness + 5));
        setMessage("Rocko is eating, he loves it!");
    };

    const petRock = () => {
        setHappiness(Math.min(100, happiness + 15));
        setMessage("sit there contenttedly!");
    };

    const getMood = () => {
        if (happiness > 70) return "Happy";
        if( happiness > 40) return "Content";
        return "Sad";
    };

    const reStartRock = () => {
        setHappiness(50);
        setHunger(50);
        setMessage("Pet Rocko...");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pet Rocko Simulator</Text>
            
            <View style={styles.rockContainer}>
                <Text style={styles.rock}>🪨</Text>
                <Text style={styles.mood}>Mood: {getMood()}</Text>
            </View>

            <View style={styles.stats}>
                <Text style={styles.stat}>Happiness: {happiness}</Text>
                <Text style={styles.stat}>Hunger: {hunger}</Text>
            </View>
            
            <Text style={styles.message}>{message}</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={petRock}>
                    <Text style={styles.buttonText}>Pet Rocko</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={feedRock}>
                    <Text style={styles.buttonText}>Feed Rocko</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={reStartRock}>
                    <Text style={styles.buttonText}>Restart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f0e6d2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5c4033',
    marginBottom: 30,
  },
  rockContainer: {
    alignItems: 'center',
    backgroundColor: '#e8d7c3',
    padding: 30,
    borderRadius: 20,
    marginBottom: 20,
  },
  rock: {
    fontSize: 80,
    marginBottom: 10,
  },
  mood: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  stats: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  stat: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginVertical: 5,
  },
  message: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    gap: 10,
  },
  button: {
    backgroundColor: '#8b6f47',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
