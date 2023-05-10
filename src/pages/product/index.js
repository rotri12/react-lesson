import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductListing from "../../components/ProductListing";
import { addCart } from "../../redux/slice/cartSlice";
import productsData from "../../utils/static/product.json";

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addCart(product));
  };

  const goToDetail = (product) => {
    navigate("/product-detail", { state: { product } });
  };

  const removeFromCart = (product_id) => {
    dispatch(removeFromCart(product_id));
  };

  return (
    <div className="App">
      <h1>List Product</h1>
      <ProductListing
        products={productsData}
        addToCart={addToCart}
        goToDetail={goToDetail}
      />
    </div>
  );
}
