import {
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Hasil from "../../components/Hasil";
import { updateTotal } from "../../redux/slice/totalSlice";

export default function Calculator() {
  const dispatch = useDispatch();
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [total, setTotal] = useState(0);

  const operatorOptions = ["+", "-", "/", "*"];

  useEffect(() => {
    hitungTotal();
  }, [angka1, angka2, operator]);

  const hitungTotal = () => {
    const tempAngka1 = parseInt(angka1);
    const tempAngka2 = parseInt(angka2);
    let tempTotal = 0;
    if (operator === "+") {
      tempTotal = tempAngka1 + tempAngka2;
    } else if (operator === "-") {
      tempTotal = tempAngka1 - tempAngka2;
    } else if (operator === "/") {
      tempTotal = tempAngka1 / tempAngka2;
    } else if (operator === "*") {
      tempTotal = tempAngka1 * tempAngka2;
    }
    dispatch(updateTotal(tempTotal));
    setTotal(tempTotal);
  };
  return (
    <Container sx={{ p: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h3" textAlign={"center"} sx={{ mb: 2 }}>
            Calculator
          </Typography>
          <TextField
            label="Angka 1"
            variant="outlined"
            value={angka1}
            onChange={(e) => setAngka1(e.target.value)}
            type="number"
            sx={{ mr: 2 }}
          />
          <FormControl>
            <InputLabel>Operator</InputLabel>
            <Select
              value={operator}
              label="Operator"
              onChange={(e) => setOperator(e.target.value)}
              sx={{ mr: 2, width: 120 }}
            >
              {operatorOptions.map((option, i) => (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Angka 2"
            variant="outlined"
            value={angka2}
            onChange={(e) => setAngka2(e.target.value)}
            type="number"
          />
        </CardContent>
        <Hasil var1={angka1} var2={angka2} operand={operator} tot={total} />
      </Card>
    </Container>
  );
}
