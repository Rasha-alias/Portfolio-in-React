import React from "react";
import Repo from "./repository";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const  Github= () => {
   
    return ( 
    <div>
        <Container>
            <Row>
               <Col sm={{ span: 10, offset: 1,}}>
                  <Repo/>
               </Col>
            </Row>
        </Container>
     
    
    </div> );
}
 
export default Github;