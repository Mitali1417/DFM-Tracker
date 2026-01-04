import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import { INFO_POINTS } from "../constants/infoText";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function InfoBottomSheet({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.titleDiv}>
            <Ionicons name="footsteps-outline" size={24} color="black" />
            <Text style={styles.title}>Steps to count fetal kicks</Text>
          </View>
          <View style={styles.sheet}>
            {INFO_POINTS.map((point, index) => (
              <View
                key={index}
                style={[
                  styles.pointContainer,
                  index % 2 !== 0 && styles.alternateBg,
                ]}
              >
                <Text style={styles.point}>
                  {index + 1}. {point}
                </Text>
              </View>
            ))}

            <Pressable onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>
                <Ionicons name="close-outline" size={24} color="black" />
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  modal: {
    position: "relative",
    backgroundColor: "#ffffff6f",
    padding: 6,
    borderRadius: 18,
    gap: 6,
    borderColor: "#ffffffff",
    borderWidth: 1,
  },
  titleDiv: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    columnGap: 8,
  },
  pointContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  alternateBg: {
    backgroundColor: "#F2F2F2",
  },

  sheet: {
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  point: {
    fontSize: 14,
    marginBottom: 8,
    color: "#444",
    fontWeight: "500",
  },
  closeBtn: {
    position: "absolute",
    top: -150,
    right: 0,
    marginTop: 16,
    alignSelf: "center",
    backgroundColor: "#e0e0e0b9",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    color: "#007AFF",
    fontWeight: "600",
  },
});
