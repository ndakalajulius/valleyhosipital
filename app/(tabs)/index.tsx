import { Image, ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Image
        source={{ uri: "https://placekitten.com/500/300" }}
        style={styles.image}
      />
      <Text style={styles.paragraph}>
        Welcome to the Home tab of your app 🚀
      </Text>
      <Text style={styles.paragraph}>
        You can start customizing this screen with your own content.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
});
