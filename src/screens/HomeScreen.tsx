import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Poster from "../../assets/images/HomeBg.jpg";
import PosterCard from "../components/PosterCard";
import RecordCard from "../components/RecordCard";
import { RootStackParamList } from "../navigation/RootNavigator";
import { getRecords } from "../storage/dfmStorage";
import { DFMRecord } from "../types/dfm";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [records, setRecords] = useState<DFMRecord[]>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadRecords);
    return unsubscribe;
  }, [navigation]);

  async function loadRecords() {
    const data = await getRecords();
    data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setRecords(data);
  }

  return (
    <View style={styles.container}>
      <PosterCard
        image={Poster}
        rightLabel="Save"
        leftTopLabel="Leap Articles"
        leftBottomLabel="DFM (fetal movement)"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
      >
        <Text style={styles.buttonText}>Record fetal movement</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Past records</Text>
      <FlatList
        data={records}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecordCard date={item.date} durationSeconds={item.durationSeconds} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No records yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    gap: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: "600",
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
  },
  empty: {
    textAlign: "center",
    color: "#777",
    marginTop: 20,
  },
});
