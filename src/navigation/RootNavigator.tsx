import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CounterScreen from "../screens/CounterScreen";
import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import InfoBottomSheet from "../components/InfoBottomSheet";
import { useState } from "react";

export type RootStackParamList = {
  Home: undefined;
  Counter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <NavigationContainer>
      <>
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "DFM (Kick counter)",
              headerRight: () => (
                <Text style={{ marginRight: 10, fontSize: 16 }}>👶 0</Text>
              ),
            }}
          />

          <Stack.Screen
            name="Counter"
            component={CounterScreen}
            options={{
              title: "Record DFM",
              headerRight: () => (
                <Pressable
                  style={styles.infoBtn}
                  onPress={() => setShowInfo(true)}
                >
                  <MaterialIcons
                    name="info-outline"
                    size={24}
                    color="black"
                  />
                </Pressable>
              ),
            }}
          />
        </Stack.Navigator>

        {/* ✅ Modal OUTSIDE navigator */}
        <InfoBottomSheet
          visible={showInfo}
          onClose={() => setShowInfo(false)}
        />
      </>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  infoBtn: {
    alignSelf: "flex-end",
  },
});
