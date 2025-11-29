import React from "react";
import { LinearGradient } from "expo-linear-gradient"; // ✅ use Expo version

const Gradient = ({ colors = ["#fff", "#000"], style, children, start, end }) => {
  return (
    <LinearGradient
      colors={colors} 
      start={start || { x: 0, y: 0 }}
      end={end || { x: 1, y: 0 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default Gradient;
