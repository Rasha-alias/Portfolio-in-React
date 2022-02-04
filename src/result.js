import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Result = (props) => {
    const {repos} = props;
    //console.log("repos are:", repos)

    const reposList = 
     
          repos.length !== 0 ?

          (repos.data.map((item) =>
          
          <div className="repospace"  key={item.id} ><h2> <a href={item.html_url} className="githublink"> {item.name}<br/></a> </h2></div>)):
          
          (<li>No Repos Found</li>);
        
    
    return ( 
        <Container>
            <Row>
            <Col>
                <div className="reposOutput"> {reposList}</div>
            </Col>
            </Row>
        
        </Container>
     );
}
 
export default Result;