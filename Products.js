import React, { useEffect } from "react";
import Slider from "react-slick";
import {
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions/productAction";
function Products() {
  const Products = useSelector((state) => state.productsget);
  const { loading, products, error } = Products;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    if (!loading && !error) {
      console.log(products, "pe");
    }
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
   
    initialSlide: 0,
     
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className="nav"></div>
      
      <Container>
     
        <Row className='product'>
         <Slider {...settings}>
          {loading ? (
            <h1>loading.....</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            products.map((result) => (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={result.image}
                  />
                  <Card.Body>
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                  </ListGroup> */}
                  {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body> */}
                </Card>
              </Col>
            ))
          )}
          </Slider>  
        </Row>
       
      </Container>
    </div>
  );
}

export default Products;
