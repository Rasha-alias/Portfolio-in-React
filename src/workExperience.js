import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WorkExperience = () => {
  return <div>
    <Container fluid={true} >
      
              <Row>
                  <Col  md={{ span: 3, offset: 1,}}><h2 className="employ">EMPLOYMENT </h2></Col>
              </Row>
              
              <Row><Col className="content" md={{span:7,offset:3}}></Col></Row>

              <Row className=" shadow mt-5">
              <Col sm={3}><h4 className="employment-text  my-3"> Apr 2016-</h4></Col>
              <Col sm={8}><h4 className="employment-text my-3" >Student Assistant & Teacher Assistant <br/>
              Uppsala schools (vikarieförmedling)</h4></Col>
              </Row>

              <Row className=" shadow mt-5">
              <Col sm={3}><h4 className=" employment-text  my-3"> 2019</h4></Col>
              <Col sm={8}><h4 className=" employment-text my-3">Tutor, Adult Education 
              </h4></Col>
              </Row>

              <Row className="shadow mt-5">
              <Col sm={3}><h4 className=" employment-text  my-3">Sep 2010 - Okt 2013 </h4></Col>
              <Col sm={8}><h4 className=" employment-text my-3">It Teacher, Vocational School Duhok, Iraq
              </h4></Col>
              </Row>

              <Row className="shadow mt-5 my-3">
              <Col sm={3}><h4 className=" employment-text  my-3">Sep 2007 - Apr 2013 </h4></Col>
              <Col sm={8}><h4 className=" employment-text my-3">It Teacher, Teacher Institute, Akre Dohuk Iraq </h4></Col>
              </Row>

              <Row className="shadow mt-5">
              <Col sm={3}><h4 className=" employment-text  my-3"> Mar 2005 - Apr 2008 </h4></Col>
              <Col sm={8}><h4 className="employment-text my-3"> Designer, Orthodox Church Magazine, Bahzani Mosul Iraq </h4></Col>
              </Row>


    </Container>
    
  </div>
};

export default WorkExperience;
