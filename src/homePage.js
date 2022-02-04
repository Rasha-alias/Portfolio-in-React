
import React from "react";
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";

import { init } from "ityped";
import{useEffect, useRef} from 'react';

import profilePic from './pictures/profilePic.jpg';
//import { Form } from "react-bootstrap";

const Home = () =>{

    const textRef = useRef();

    useEffect (() =>{
        init(textRef.current, {
            showCursor:false,
            backDelay:1700,
           backSpeed:100,
            strings: [" Hi There ! "],
        });

    },[]);
    

    return (
    
        <div className="homestyle"> 
            <Container fluid={true}>
              <Row>
                  <Col className="img d-flex justify-content-center" md={{ span: 4, offset: 4,}}><Image src={profilePic} alt="Rashas profile picture" style={{height:"320px", width:"250px"}}roundedCircle /></Col>
              </Row>
              
              <Row>
                  <Col  className=" textstyle " md={{ span: 6, offset: 3}}>
                      <span ref={textRef}></span> <br/> I am  <b className="rasha-name">Rasha Alias</b>
                  </Col>
                  </Row>
                  <Row>
                  <Col  className=" textstyle d-flex justify-content-center" md={{ span: 6, offset: 3}}>
                      <div>I have studied Computer Science in Iraq and worked as IT teacher 
                      in  Duhok vocational school. Now I am studing <span>(Front End Developer)</span>in KYH, Swedeen 
                      to develop myself in this branch and to be a web designer and developer in the future.</div> 
                  </Col>
                  </Row>

            </Container>
            
        </div>
       
      );
}
 
export default Home;