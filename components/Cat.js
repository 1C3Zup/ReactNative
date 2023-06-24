import React from "react";
import { Text } from "react-native";

const getFullName = (fn, sn, tn) => {
  return fn + "" + sn + "" + tn;
};

const Cat = () => {
  return <Text>Hello,I am{getFullName("Lilly", "Louis", "Luca")}</Text>;
};

export default Cat;
