import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const ActivitiesScreen = () => {
  const [selectedButton, setSelectedButton] = useState("people");
  const [content, setContent] = useState("People Content");

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          ActivitiesScreen
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 12,
          }}
        >
          <TouchableOpacity
          onPress={()=>handleButtonClick('people')}
            style={[
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "#fff",
                borderColor: "#D0D0D0",
                borderRadius: 6,
                borderWidth: 0.5,
              },
              selectedButton === "people" ? { backgroundColor: "black" } : null,
            ]}
          >
            <Text
              style={[
                { textAlign: "center", fontWeight: "bold" },
                selectedButton === "people"
                  ? { color: "#fff" }
                  : { color: "#000" },
              ]}
            >
              People
            </Text>
          </TouchableOpacity>



          <TouchableOpacity
            onPress={()=>handleButtonClick('all')}

            style={[
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "#fff",
                borderColor: "#D0D0D0",
                borderRadius: 6,
                borderWidth: 0.5,
              },
              selectedButton === "all" ? { backgroundColor: "black" } : null,
            ]}
          >
            <Text
              style={[
                { textAlign: "center", fontWeight: "bold" },
                selectedButton === "all"
                  ? { color: "#fff" }
                  : { color: "#000" },
              ]}
            >
              All
            </Text>
          </TouchableOpacity>



          <TouchableOpacity
            onPress={()=>handleButtonClick('requests')}

            style={[
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "#fff",
                borderColor: "#D0D0D0",
                borderRadius: 6,
                borderWidth: 0.5,
              },
              selectedButton === "requests" ? { backgroundColor: "black" } : null,
            ]}
          >
            <Text
              style={[
                { textAlign: "center", fontWeight: "bold" },
                selectedButton === "requests"
                  ? { color: "#fff" }
                  : { color: "#000" },
              ]}
            >
              Requests
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ActivitiesScreen;
