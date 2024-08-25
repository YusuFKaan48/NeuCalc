import React from "react";
import { Text, View } from "react-native";
import Calc from "../Main/Calc";
// import Button from "../Components/Button";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F8F8F8',
      }}
    >
     < Calc />
    </View>
  );
}
