import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import client from "../api/client";
import { useAuthStore } from "../store/auth";

export default function AppointmentsScreen() {
  const [appointments, setAppointments] = useState([]);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await client.get("/appointments", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Doctor: {item.doctorId}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Time: {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
});
