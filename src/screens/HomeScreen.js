import { Button, StyleSheet, Text, View } from "react-native";
import { useAuthStore } from "../store/auth";

export default function HomeScreen({ navigation }) {
  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏥 Valley Hospital</Text>
      <Button
        title="Book Appointment"
        onPress={() => navigation.navigate("BookAppointment")}
      />
      <Button title="View Appointments" onPress={() => navigation.navigate("Appointments")} />
      <Button title="Logout" onPress={logout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  heading: { fontSize: 24, marginBottom: 30, textAlign: "center" },
});
