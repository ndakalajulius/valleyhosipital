import { Image, ScrollView, StyleSheet, Text } from "react-native";

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Image
        source={{ uri: "https://placekitten.com/400/300" }}
        style={styles.image}
      />
      <Text style={styles.paragraph}>
        Welcome to the Explore tab! 🎉
      </Text>
      <Text style={styles.paragraph}>
        Here you can display any content you want — articles, images, features, etc.
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
    fontSize: 24,
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
