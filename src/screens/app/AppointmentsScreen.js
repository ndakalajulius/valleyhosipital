import { StyleSheet, Text, View } from "react-native";

export default function AppointmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📅 Your Appointments will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
});
