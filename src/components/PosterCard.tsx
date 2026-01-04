import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  image: any;
  rightLabel?: string;
  leftTopLabel?: string;
  leftBottomLabel?: string;
}

export default function PosterCard({
  image,
  rightLabel,
  leftTopLabel,
  leftBottomLabel,
}: Props) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <LinearGradient
        colors={["rgba(233, 217, 217, 1)", "transparent"]}
        style={styles.topShadow}
      />

      <LinearGradient
        colors={["transparent", "rgba(122, 120, 120, 1)"]}
        style={styles.bottomShadow}
      />

      <View style={styles.rightBadge}>
        <MaterialIcons name="bookmark-border" size={18} color="#111" />
        <Text style={styles.rightBadgeText}>{rightLabel}</Text>
      </View>
      <View style={styles.leftTopBadge}>
        <Text style={styles.leftTopBadgeText}>{leftTopLabel}</Text>
      </View>
      <View style={styles.leftBottomBadge}>
        <Text style={styles.leftBottomBadgeText}>{leftBottomLabel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    borderRadius: 14,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  topShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
  },

  bottomShadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },

  rightBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(255,255,255,0.85)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  rightBadgeText: {
    fontSize: 12,
    fontWeight: "600",
  },

  leftTopBadge: {
    position: "absolute",
    top: 12,
    left: 12,
  },

  leftTopBadgeText: {
    fontSize: 15,
    fontWeight: "800",
  },

  leftBottomBadge: {
    position: "absolute",
    bottom: 12,
    left: 12,
  },

  leftBottomBadgeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
