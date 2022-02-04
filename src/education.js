import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Education = () => {
  return (
  <div>
    
    <Container fluid={true} >
      
      <Row>
          <Col  md={{ span: 3, offset: 1,}}><h2 className="employ">EDUCATION</h2></Col>
      </Row>
      
      <Row><Col className="content" md={{span:7,offset:3}}></Col></Row>

      <Row className=" shadow mt-5">
      <Col sm={3}><h4 className="employment-text  my-3"> Aug 2021 - present</h4></Col>
      <Col sm={8}><h4 className="employment-text my-3" >Front End developer <br/> KYH Vociational School</h4></Col>
      </Row>

      <Row className=" shadow mt-5">
      <Col sm={3}><h4 className=" employment-text  my-3"> 2020 - 2021</h4></Col>
      <Col sm={8}><h4 className=" employment-text my-3">English 5 & 6<br/> Hermods School, Uppsala</h4></Col>
      </Row>

      <Row className="shadow mt-5">
      <Col sm={3}><h4 className=" employment-text  my-3">2018</h4></Col>
      <Col sm={8}><h4 className=" employment-text my-3">Swedish<br/> Adult Education Linné, Uppsala</h4></Col>
      </Row>

      <Row className="shadow mt-5 my-3">
      <Col sm={3}><h4 className=" employment-text  my-3">  2000 - 2005</h4></Col>
      <Col sm={8}><h4 className=" employment-text my-3">   Bachlor Degree of Computer Science<br/> Al-Hadbaah University Mosul,Iraq</h4></Col>
      </Row>

</Container>


</div>
);
 
};

export default Education;


                                
                            

                      
                             
                             
                     
