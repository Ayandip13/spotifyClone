import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const authenticate = () => {
    
  };

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <StatusBar barStyle={"light-content"} />
        <View style={{ height: 80 }} />
        <Entypo
          name="spotify"
          size={80}
          style={{ textAlign: "center" }}
          color="white"
        />
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Millions of Songs Free on Spotify
        </Text>
        <View style={{ height: 80 }} />
        <Pressable
          onPress={authenticate}
          style={{
            backgroundColor: "#1DB954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Sign In with Spotify</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: "row",
            marginVertical: 10,
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#C0C0C0",
            borderWidth: 0.8,
          }}
        >
          <MaterialIcons name="phone-android" size={24} color="white" />
          <Text
            style={{
              fontWeight: 500,
              color: "#fff",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continue with phone Number
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: "row",
            marginVertical: 10,
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#C0C0C0",
            borderWidth: 0.8,
          }}
        >
          <AntDesign name="google" size={24} color="red" />
          <Text
            style={{
              fontWeight: 500,
              color: "#fff",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continue with Google
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: "row",
            marginVertical: 10,
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#C0C0C0",
            borderWidth: 0.8,
          }}
        >
          <MaterialIcons name="facebook" size={24} color="blue" />
          <Text
            style={{
              fontWeight: 500,
              color: "#fff",
              textAlign: "center",
              flex: 1,
            }}
          >
            Sign In with facebook
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
