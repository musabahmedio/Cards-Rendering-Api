import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Rating,
  LinearProgress,
  Alert,
} from "@mui/material";

const Product = () => {
  const [prodData, setProdData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [user, setUser] = useState();

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      const productsArray = Array.isArray(response.data.products)
        ? response.data.products
        : [];
      setProdData(productsArray);
      console.log(productsArray);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {isloading ? (
        <LinearProgress />
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {prodData.map((product, index) => (
            <Card
              id={product.id}
              key={index}
              sx={{
                minWidth: 300,
                maxWidth: 350,
                margin: 2,
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={product.thumbnail}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography sx={{ margin: 1 }}>
                  <Chip label={product.category} color="success" />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description && product.description.length > 100
                    ? `${product.description.slice(0, 140)}...`
                    : product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Rating name="read-only" value={product.rating} readOnly />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  onClick={() => {
                    console.log(prodData.id);

                    navigate(`/productdetail/${product.id}`);
                  }}
                >
                  Buy for ${product.price}{" "}
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default Product;
