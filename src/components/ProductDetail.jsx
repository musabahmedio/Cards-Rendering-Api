import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const ProductDetails = () => {
  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    getSingleData();
  }, []);
  const [prod, setProd] = useState(null);
  const getSingleData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);

      //   console.log("response getSingleData", response);
      setProd(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  //   console.log(product, "product");

  return (
    <>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 350,
          margin: 2,
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          //   image={prod.thumbnail}
          //   title={prod.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* {prod.title} */}
          </Typography>
          <Typography sx={{ margin: 1 }}>
            {/* <Chip label={prod.category} color="success" /> */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {prod.description} */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* <Rating name="read-only" value={prod.rating} readOnly /> */}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button>Buy for ${prod.price} </Button> */}
        </CardActions>
      </Card>
    </>
  );
};

export default ProductDetails;
