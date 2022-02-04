import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Language = () => {
  return (
  <div>
    <Container fluid={true} >
      
      <Row>
          <Col  md={{ span: 3, offset: 1,}}><h2 className="employ">LANGUAGE</h2></Col>
      </Row>
      
      <Row><Col className="content" md={{span:7,offset:3}}></Col></Row>

      <Row className=" shadow mt-5">
      <Col sm={5}><h4 className="employment-text  my-3"><strong>Arabiska, </strong> Modersmål</h4></Col>
      </Row>

      <Row className=" shadow mt-5">
      <Col sm={5}><h4 className="employment-text  my-3"><strong>Engliska, </strong> Bra goda Kunskapar i tal och skrift</h4></Col>
      </Row>

      <Row className=" shadow mt-5">
      <Col sm={6}><h4 className="employment-text  my-3"><strong>Svenska, </strong> gymnasienivå, förstår enklare samtal och texter</h4></Col>
      </Row>

</Container>

</div>
  );
};

export default Language;
