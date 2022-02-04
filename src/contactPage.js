import React from "react";
import Email from "./emailForm";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5";



const Contact = () => {
return(
  <div>
    <Container>
      <Row>
        <Col className="box-1">
          <h1 className=" text-box-1">We Would Love <br/>To Hear From You</h1><br/>
          <p className="phone-icon"><BsTelephoneInboundFill/></p>
          <p className="info">073-89746-28</p><br/>
          <p className="phone-icon"><MdEmail/></p>
          <p className="info">Rashaziyad000@gmail.com</p><br/>
          <p className="phone-icon"><IoLocationSharp/></p>
          <div className="info"> Atterbomsgatan 32, Uppsala</div>
        </Col>
        <Col className="box-2"> <Email/> </Col>
      </Row>
     

    </Container>
    
  </div>
)
  
}
 
export default Contact;