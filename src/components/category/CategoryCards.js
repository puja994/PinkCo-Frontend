import React from 'react'
import {Row, Col,Container, Image} from 'react-bootstrap'
import makeupImageOne from '../assets/img/categoryImages/makeupBrushCategory.jpg'
import makeupImageTwo from '../assets/img/categoryImages/skinCareCategory.jpg'
import makeupImageThree from '../assets/img/categoryImages/beautyAccessoriesCategory.jpg'

export const CategoryCards = () => {
    return (
        <div>
            <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={makeupImageOne} roundedCircle width="100px" height="auto"/>

    </Col>
    <Col xs={6} md={4}>
      <Image src= {makeupImageTwo} roundedCircle width="100px" height="auto"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={makeupImageThree} roundedCircle width="100px" height="auto" />
    </Col>
  </Row>
</Container>
        </div>
    )
}
