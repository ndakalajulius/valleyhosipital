import { StyleSheet, Text, View } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏥 Welcome to Valley Hospital Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
});
