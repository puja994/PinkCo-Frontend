import React from 'react'
import {Row, Col,Container, Image} from 'react-bootstrap'
import makeupImageOne from '../assets/img/categoryImages/makeupBrushCategory.jpg'
import makeupImageTwo from '../assets/img/categoryImages/skinCareCategory.jpg'
import makeupImageThree from '../assets/img/categoryImages/beautyAccessoriesCategory.jpg'

export const CategoryCards = () => {
    return (
        <div>
          <h1 className="mt-5 mb-5"style={{ textAlign: "center" }}>Categories</h1>
            <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={makeupImageOne} roundedCircle width="100px" height="auto"/>
      Makeup Items

    </Col>
    <Col xs={6} md={4}>
      <Image src= {makeupImageTwo} roundedCircle width="100px" height="auto"/>
      Skincare Items
    </Col>
    <Col xs={6} md={4}>
      <Image src={makeupImageThree} roundedCircle width="100px" height="auto" />
      Beauty Accessories
    </Col>
  </Row>
</Container>
        </div>
    )
}
