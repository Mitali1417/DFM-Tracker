import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { saveRecord } from "../storage/dfmStorage";
import { FontAwesome } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Counter">;

export default function CounterScreen({ navigation }: Props) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  async function handleSave() {
    if (seconds === 0) {
      Alert.alert("Nothing to save", "Please record some kicks first.");
      return;
    }

    await saveRecord({
      id: Date.now().toString(),
      date: new Date().toISOString(),
      durationSeconds: seconds,
    });

    Alert.alert(
      "Saved successfully",
      "Your fetal movement record has been saved.",
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          width: "75%",
          borderRadius: 12,
        }}
      >
        <Text style={styles.label}>Stop recording after 10 kicks</Text>
      </View>

      <View
        style={{
          backgroundColor: "#ffffff3c",
          padding: 10,
          width: "70%",
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "#ffffffff",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 100,
          }}
        >
          <Text style={[styles.timer, { textAlign: "center" }]}>
            {Math.floor(seconds / 60)
              .toString()
              .padStart(2, "0")}
            :{(seconds % 60).toString().padStart(2, "0")}
          </Text>
        </View>
      </View>

      <Pressable onPress={() => setRunning(!running)} style={styles.controlBtn}>
        <Text style={styles.controlText}>
          {running ? (
            <FontAwesome name="stop" size={24} color="black" />
          ) : (
            <FontAwesome name="play" size={24} color="black" />
          )}
        </Text>
      </Pressable>

      <Pressable onPress={handleSave} style={styles.saveBtn}>
        <Text style={styles.saveText}>Save</Text>
      </Pressable>
      <Text style={styles.linkText}>
        What if I am not getting enough kicks?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4edffff",
    gap: 20,
  },
  infoBtn: {
    alignSelf: "flex-end",
  },
  label: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
  },
  timer: {
    fontSize: 40,
    fontWeight: "700",
    color: "#c60000ff",
  },
  controlBtn: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: "#ffffffff",
    borderWidth: 1,
    borderColor: "#ffffffff",
    marginBottom: 20,
  },
  controlText: {
    fontSize: 16,
    color: "#007AFF",
  },
  saveBtn: {
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 40,
    width: "90%",
    backgroundColor: "#ffffff",
  },
  saveText: {
    fontWeight: "600",
    textAlign: "center",
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "500",
  },
});
