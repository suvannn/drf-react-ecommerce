import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="product-card my-3 p-3 rounded">

      {/* IMAGE */}
      <Link
        to={`/product/${product._id}/`}
        className="product-img-wrapper"
      >
        <Card.Img src={product.image} className="product-img" />
      </Link>

      {/* BODY */}
      <Card.Body className="d-flex flex-column justify-content-between">

        <div className="d-flex justify-content-between align-items-start">

          {/* LEFT SIDE */}
          <div>
            <Link
              to={`/product/${product._id}/`}
              className="text-decoration-none text-dark"
            >
              <Card.Title>
                <strong>{product.product_name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as="h5">Rs. {product.price}</Card.Text>

            <Rating
              value={product.rating}
              text={` from ${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>

          {/* RIGHT SIDE */}
          <button className="btn btn-primary">
            <i className="fa-solid fa-cart-arrow-down"></i>
          </button>

        </div>

      </Card.Body>
    </Card>
  );
}

export default Product;