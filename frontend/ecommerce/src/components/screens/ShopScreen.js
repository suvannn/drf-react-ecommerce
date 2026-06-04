import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

function ShopScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchproducts() {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    }
    fetchproducts();
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h1>Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <h3>{product.product_name}</h3>
              <h6>{product.category}</h6>
              <h6>{product.price}</h6>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ShopScreen;
