import React from 'react'
import './testimonials.css'
import {Container, Carousel, Row} from 'react-bootstrap'
import vegan from '../assets/img/vegan.png'
import australia from '../assets/img/australia.png'
import natural from '../assets/img/natural.png'

export const Testimonials = () => {
    return (
        <div className="testimonial">
            <Container>
<h1>LUXURIOUS, YET RIDICULOUSLY SIMPLE SKINCARE</h1>
<p>We are an Australian brand with a focus on creating the highest quality, natural skincare products that are amazing for your skin, clean and effective, better for the environment, and reassuringly cruelty-free.</p>

<div className="icons">
<img
src={vegan}
className="vegan"

/>


  
<img
src={natural}
className="vegan"
/> 

<img
src={australia}
className="vegan"
/>

</div>
            </Container>

            <Container  className="testi" fluid> 

           

       <Row ><p className="saying"> "Good skincare starts with simple, natural, non-chemical, ultra high-end luxury products.
I spare no expense in scouring the world for just the right ingredients, finding solutions in nature, and creating results-driven products."
-Puja</p></Row>

       <Row></Row>

       <Row></Row>
 
                
            </Container>
        </div>
    )
}
