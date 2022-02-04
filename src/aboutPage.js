import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyVedio from "./vedio";
import Portfolio from "./portfolio";
import Like from "./like";


const About = () => {
    return (
        <div> <Container>
        <Row>
          <Col className="" md={{ span: 6, offset: 3}}>
            <h1 className="aboutPage-title" >About Me.</h1><br/>
          </Col>
          </Row>

          <Row>  
          <Col className="d-flex justify-content-center" >
          <Portfolio />  
           </Col>
           </Row>

           <Row>
          <Col  className=" vedio-title  d-flex justify-content-center" md={{ span: 6, offset: 3}}><p>  This vedio shows you to Work hard and Do not giv up!</p></Col>
          </Row>
     
          <Row>
          <Col className="vedio " md={{ span: 6, offset: 3}}><p><MyVedio/> </p> </Col>
          </Row>
          <Row><Col className="d-flex justify-content-center"><Like/></Col></Row>
       
  
      </Container>
      
        </div>
      );
}
 
export default About;