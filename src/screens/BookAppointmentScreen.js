import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import client from "../api/client";
import { useAuthStore } from "../store/auth";

export default function BookAppointmentScreen({ navigation }) {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const token = useAuthStore((state) => state.token);

  const handleBook = async () => {
    try {
      await client.post(
        "/appointments",
        { doctorId, date, time },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigation.navigate("Appointments");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Appointment</Text>
      <TextInput
        style={styles.input}
        placeholder="Doctor ID"
        value={doctorId}
        onChangeText={setDoctorId}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Book" onPress={handleBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  heading: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15 },
});
