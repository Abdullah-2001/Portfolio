import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/Card/Card';
import Women1 from '../../Assets/women1.jpg';
import Women2 from '../../Assets/women3.jpg';
import LimitedBg from '../../Assets/hero-bg.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import data from '../../Products.json';
import Button from '../../Components/Button/Button';
import { IoIosArrowUp } from 'react-icons/io'
import './Home.css';

const Home = () => {

  const [products, setProducts] = useState([])
  const [days, setDays] = useState("")
  const [hours, setHours] = useState("")
  const [min, setMin] = useState("")
  const [sec, setSec] = useState("")

  useEffect(() => {
    setProducts(data)
  }, [])

  function addToCart(v) {
    console.log(v);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setInterval(() => {
      let dest = new Date("aug 8, 2022 12:00:00").getTime();
      let now = new Date().getTime();
      let diff = dest - now;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      setMin(Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)))
      setSec(Math.floor(diff % (1000 * 60) / (1000)))
    }, 1000)
  }, [])

  return (
    <div>
      {/* Hero-section */}
      <section className='hero-section'>
        <img style={{ width: "100%", height: "500px", objectFit: "cover" }} className="bottom" src={Women1}></img>
        <img style={{ width: "100%", height: "500px", objectFit: "cover" }} className="top" src={Women2}></img>
        <div className='hero-container'>
          <p>Welcome to EkoCart</p>
          <h1>A New Online Shopping Experience</h1>
          <button>Shop Now</button>
        </div>
      </section>
      {/* Product-section */}
      <section className='product-section'>
        <div className='section-title'>
          <p>— New Collection</p>
          <h1>Trending Products</h1>
        </div>
        <div className='product-container'>
          <Container fluid>
            <Row>
              {products.products?.map((v) => {
                return (
                  <Col lg={3} key={v.id}>
                    <ProductCard style="product-card">
                      <img src={v.image} />
                      <div className='detail-container'>
                        <p className='name'>{v.name}</p>
                        <p className='price'>$ {v.price}</p>
                        <div style={{ display: "flex" }}>
                          <Button onClick={() => addToCart(v)} style="add-to-cart" text="Add to cart" />
                          <Button style="view-product" text="View product" />
                        </div>
                      </div>
                    </ProductCard>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
        {/* Limited-section */}
        <section className='limited-offer-section'>
          <div>
            <img style={{
              width: "100%",
              // height: "500px",
              objectFit: "cover",
            }} src={LimitedBg} alt="" />
          </div>
        </section>
        <div className='scroll-to-top' onClick={scrollToTop}>
          <IoIosArrowUp size={30} color="white" />
        </div>
      </section>
    </div>
  )
}

export default Home