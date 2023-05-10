import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const total = useSelector((state) => state.total.value);
  return <div>Total Calculator = {total}</div>;
}
