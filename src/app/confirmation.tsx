

import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function ConfirmationScreen() {
  const { firstName } = useLocalSearchParams<{
    firstName: string;
  }>();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✓</Text>
      </View>

      <Text style={styles.title}>
        Form Submitted Successfully!
      </Text>

      <Text style={styles.message}>
        Thank you, {firstName || "User"}!
      </Text>

      <Text style={styles.description}>
        Your information has been validated and submitted successfully.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>
          Back to Sign Up
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  icon: {
    fontSize: 48,
    color: "#16A34A",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 12,
  },
  message: {
    fontSize: 20,
    color: "#2563EB",
    fontWeight: "600",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
