
import React from "react";

import { BrowserRouter as Router,Routes,Route ,Link } from "react-router-dom";

import Home from "./homePage";
import About from "./aboutPage";
import Contact from "./contactPage";
import Github from "./githubPage";


import WorkExperience from "./workExperience";
import Language from "./language";
import Education from "./education";
import Skills from "./skills";
import ErrorPage from './errorpage'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  NavDropdown  from "react-bootstrap/Navdropdown";




                               
class Header extends React.Component {

render() {
 
return (

<Router>
<Container className="" fluid={true}>
<Navbar collapseOnSelect expand="lg" bg="grey" variant="light" className="navbar-border">
<Container>
  <Navbar.Brand href="#home" className="brand">  Rasha Alias .</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="me-auto">
        <Link className="nav-link" to ="/">Home</Link>
        <Link className="nav-link" to ="/aboutPage">About</Link>
        <Link className="nav-link" to ="/contactPage">Contact</Link>
    </Nav>

    <Nav className="ml-auto">
    <NavDropdown title="CV" id="collasible-nav-dropdown">

        
          <NavDropdown.Item>
            <Link to ="/workExperience" className="dropin-item"> <h5>Work Experience</h5> </Link>
          </NavDropdown.Item>
       
          <NavDropdown.Item>
            <Link to ="/education" className="dropin-item"><h5 >Education</h5> </Link>
          </NavDropdown.Item>
       
         <NavDropdown.Item>
         <Link to = "/language" className="dropin-item"><h5 >Language</h5></Link>
         </NavDropdown.Item>

         <NavDropdown.Item>
         <Link to = "/skills" className="dropin-item"><h5 >Skills</h5></Link>
         </NavDropdown.Item>
        
     </NavDropdown>
      <Link className="nav-link" to ="/githubPage"> GitHub</Link>
        </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>

<Routes>
<Route path="/" element = {<Home />} />
<Route path="/aboutPage" element ={<About />} />
<Route path="/contactPage" element ={<Contact />} />
<Route path="/gitHubPage" element ={<Github/>} />
<Route path="/workExperience" element ={<WorkExperience/>} />
<Route path="/education" element ={<Education/>} />
<Route path="/language" element ={<Language/>} />
<Route path="/skills" element ={<Skills />} />
<Route path="*" element ={<ErrorPage />} />



</Routes>

</Container>

</Router>



);
}
}


export default Header;