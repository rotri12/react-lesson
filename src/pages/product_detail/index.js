import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation } from "react-router-dom";

export default function ProductDetail(props) {
  const location = useLocation();

  const product = location?.state?.product ?? null;
  return (
    <Container>
      {product && (
        <Card>
          <CardMedia
            component="img"
            alt={product.name}
            height={300}
            image="/images/image-sample.jpg"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={"bold"}
            >
              {product.price}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              // onClick={() => addToCart(product)}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Container>
  );
}
