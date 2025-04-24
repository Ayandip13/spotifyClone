import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [secureText, setSecureText] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={{
            uri: "data:image/png;base64,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",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 20 }}>
            Login to Your Account
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 0.5,
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              placeholderTextColor={"gray"}
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 6,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter your Email"
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 0.5,
              borderRadius: 5,
            }}
          >
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name={secureText ? "visibility-off" : "visibility"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TextInput
              placeholderTextColor={"gray"}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={secureText}
              style={{
                color: "gray",
                marginVertical: 6,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter your Password"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ fontWeight: 500, color: "#007FFF" }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 45 }} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: 200,
            backgroundColor: "#000",
            padding: 15,
            marginTop: 40,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Pressable
          style={{ marginTop: 25 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
