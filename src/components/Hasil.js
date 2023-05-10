import React from "react";

export default function Hasil({ var1, var2, operand, tot }) {
  return (
    <p>
      Hasil dari {var1} {operand} {var2} = {tot}
    </p>
  );
}
