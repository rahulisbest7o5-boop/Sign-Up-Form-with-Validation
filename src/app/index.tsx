import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { signupSchema, type SignupFormData } from "../schemas/signupSchema";

export default function SignUpScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: SignupFormData) {
    console.log("First Name:", data.firstName);
    console.log("Last Name:", data.lastName);
    console.log("Email:", data.email);

    router.push({
      pathname: "/confirmation",
      params: { firstName: data.firstName },
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>Enter your details to get started</Text>

       
        <Text style={styles.label}>First Name</Text>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.firstName && (
          <Text style={styles.error}>{errors.firstName.message}</Text>
        )}

     
        <Text style={styles.label}>Last Name</Text>
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.lastName && (
          <Text style={styles.error}>{errors.lastName.message}</Text>
        )}

        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

      
        <Text style={styles.label}>Confirm Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword.message}</Text>
        )}


        <Pressable style={styles.button} onPress={() => handleSubmit(onSubmit)()}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 12,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    width: "100%",
    maxWidth: 420,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginTop: 12,
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#0F172A",
  },

  error: {
    color: "#DC2626",
    fontSize: 12,
    marginTop: 5,
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
