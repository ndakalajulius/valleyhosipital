import { StyleSheet, Text, View } from "react-native";

export default function DoctorsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👨‍⚕️ Doctors List Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
});
