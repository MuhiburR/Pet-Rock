import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
    


export default function PetRockSimulator() {
    const [happiness, setHappiness] = useState(50);
    const [hunger, setHunger] = useState(50);
    const [message, setMessage] = useState("Pet Rocko...");

    // --- Helpers ---

    const getMood = () => {
      if (happiness > 70) return "Happy";
      if( happiness > 40) return "Content";
      return "Sad";
    };

    // -- Reactive Bar --

    const getBarColor = (value : number) => {
      const t = value / 100;
      const start = {r : 255, g : 77, b : 77}; // red-ish
      const end = {r : 76, g : 175, b : 80}; // green-ish

      const r = Math.round(start.r + (end.r - start.r) * t);
      const g = Math.round(start.g + (end.g - start.g) * t);
      const b = Math.round(start.b + (end.b - start.b) * t);

      return `rgb(${r},${g},${b})`;
    };

    // --- Actions ---

    const feedRock = () => {
        setHunger(prev => Math.min(100, prev + 25)); // fill hunger bar up
        setHappiness(prev => Math.min(100, prev + 5)); // a bit happier when fed
        setMessage("Rocko is eating, he loves it!");
    };

    const petRock = () => {
        setHappiness(Math.min(100, happiness + 15));
        setMessage("sit there contenttedly!");
    };

    const reStartRock = () => {
        setHappiness(50);
        setHunger(50);
        setMessage("Pet Rocko...");
    }

    // --- Passive Hunger Draining Over Time ---

    useEffect(() => {
      const interval = setInterval(() => {
        setHunger(prev => Math.max(0, prev-2)); // decrease by intervals of 2s
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    // --- Passive Happiness loss when hunger is low ---
    useEffect(() => {
      if(hunger <= 30) {
        const interval = setInterval(() => {
          setHappiness(prev => Math.max(0, prev - (hunger < 20 ? 10 : 2)));
        }, 2000);
        return () => clearInterval(interval);
      }
    }, [hunger]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pet Rocko Simulator</Text>
            
            <View style={styles.rockContainer}>
                <Text style={styles.rock}>🪨</Text>
                <Text style={styles.mood}>Mood: {getMood()}</Text>
            </View>

            {/* Stats with bars */}
            <View style ={styles.stats}>
              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Happiness</Text>
                <View style={styles.barBackground}>
                  <View
                    style={[
                      styles.barFill,
                      {
                        width: `${happiness}%`,
                        backgroundColor : getBarColor(happiness),
                      },
                    ]}
                  />
                </View>
              </View>

              <View style={styles.statRow}>
                <Text style={styles.statLabel}>Hunger</Text>
                <View style={styles.barBackground}>
                  <View
                    style={[
                      styles.barFill,
                      {
                        width : `${hunger}%`,
                        backgroundColor : getBarColor(hunger),
                      },
                    ]}
                  />
                </View>
              </View>
            </View>

        <Text style={styles.message}>{message}</Text>

        <View style={styles.buttonContainer}>
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
    backgroundColor: "#f0e6d2",
    alignItems : "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#5c4033",
    marginBottom: 30,
  },
  rockContainer: {
    alignItems: "center",
    backgroundColor: "#e8d7c3",
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
    fontWeight: "600",
    color: "#333",
  },
  stats: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  statRow: {
    marginBottom: 15,
  },
  statLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    marginBottom: 6,
  },
  barBackground: {
    width: "100%",
    height: 16,
    borderRadius: 8,
    backgroundColor: "#eee",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 8,
  },
  message: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    gap: 10,
  },
  button: {
    backgroundColor: "#8b6f47",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});