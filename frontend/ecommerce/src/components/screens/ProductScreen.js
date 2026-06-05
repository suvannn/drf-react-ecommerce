import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Container } from "react-bootstrap";
import Rating from "../Rating";
import { listProductDetails } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";

function ProductScreen(params) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, params]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <Card className="p-4 shadow-lg rounded w-75">
        <Link to="/" className="btn btn-primary mb-3 w-25">
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src={product.image}
                alt={product.product_name}
                fluid
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </Col>

            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.product_name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={` from ${product.numReviews} reviews`}
                    color={"#f8e825"}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Brand:</Col>
                    <Col className="text-end">{product.product_brand}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p style={{ textAlign: "justify", marginBottom: 0 }}>
                    {product.product_info}
                  </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col className="text-end">Rs. {product.price}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Stock:</Col>
                    <Col className="text-end">{product.count_in_stock}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <p>Button</p>
                    </Col>
                    <Col className="text-end">
                      <Link to="/" className="btn btn-primary">
                        Add to cart
                      </Link>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        )}
      </Card>
    </Container>
  );
}

export default ProductScreen;
