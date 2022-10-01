import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/beanbeeean/hnm_react?q=${searchQuery}products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img width={400} src={product?.img} alt="" />
        </Col>
        <Col className="product-detail">
          <div className="product-title">{product?.title}</div>
          <div className="product-price">\ {product?.price}</div>
          <div className="product-choice">
            {product?.choice == true ? "Conscious choice" : ""}
          </div>
          <select className="product-size">
            <option value="none-selected">사이즈 선택</option>
            {product?.size.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
          <button type="button" className="product-putin">
            추가
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
