import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductListing({ products, addToCart, goToDetail }) {
  return (
    <Container>
      <Typography>Product List</Typography>
      <Stack direction="row" flexWrap={"wrap"} spacing={2}>
        {products.map((product, i) => (
          <Card key={i} sx={{ width: 300 }}>
            <CardMedia
              component="img"
              alt={product.name}
              height="140"
              image="/images/image-sample.jpg"
            />
            <CardContent
              sx={{
                height: 150,
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
                onClick={() => addToCart(product)}
              >
                <AddShoppingCartIcon />
              </IconButton>
              <Button variant="contained" onClick={() => goToDetail(product)}>
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default ProductListing;
