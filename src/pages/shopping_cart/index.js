import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQty } from "../../redux/slice/cartSlice";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);

  const [total, setTotal] = useState(0);

  const handleUpdateQty = (operator, id) => {
    dispatch(updateQty({ operator, id }));
  };

  useEffect(() => {
    if (cart && cart.length > 0) {
      let tempTotal = 0;
      cart.map((val) => {
        tempTotal += val.price * val.qty;
      });
      setTotal(tempTotal);
    }
  }, [cart]);

  return (
    <Container sx={{ p: 2 }}>
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell width="50">No.</TableCell>
              <TableCell width="250">Gambar</TableCell>
              <TableCell>Nama Barang</TableCell>
              <TableCell>Harga</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <Box
                    component="img"
                    sx={{
                      height: 150,
                      width: 150,
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateQty("-", row.id)}>
                    -
                  </Button>
                  {row.qty}
                  <Button onClick={() => handleUpdateQty("+", row.id)}>
                    +
                  </Button>
                </TableCell>
                <TableCell>{row.qty * row.price}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4}></TableCell>
              <TableCell>Total</TableCell>
              <TableCell>{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
