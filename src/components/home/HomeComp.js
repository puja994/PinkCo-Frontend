import React from 'react'
import { DisplayAllProducts } from '../products/DisplayAllProducts'
import {Carousel, Container,Row, Col, Image} from 'react-bootstrap'
import carouselImageOne from '../assets/img/Pink and Brown Classic Feminine Beauty Website-2/1.png'
import carouselImageTwo from '../assets/img/Pink and Brown Classic Feminine Beauty Website-2/2.png'
import carouselImageThree from '../assets/img/Pink and Brown Classic Feminine Beauty Website-2/3.png'
import './home.css'


export const HomeComp = () => {
    return (
        <div className="carousal">
                     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {carouselImageOne}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {carouselImageTwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carouselImageThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




            {/* <DisplayAllProducts/> */}
        </div>
    )
}
