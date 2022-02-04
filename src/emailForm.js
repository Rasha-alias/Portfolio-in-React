import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl, InputGroup } from 'react-bootstrap';

   

const Email = () => {

 const [toSend, setToSend] = useState({from_name:'', to_name:'', message:'', reply_to:'',});

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_0ofuxvs',
      'template_o5veg8u',
      toSend,
      'user_nqjhT5jAMq3FhVgXDTPFx'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

return (

 
<div className="email-form">
    <Container>

    
  <h1 className="contact-text">Contact Us</h1>

  <Form className="center-form" onSubmit={onSubmit}>

  <Form.Label className="lable">From</Form.Label>
  <InputGroup className="mb-3">
  <FormControl
   type="text" 
   name='from_name' 
   placeholder="Enter You Name"
   size="60" 
   id="input-1"
   className="input"
   value={toSend.from_name}
   onChange={handleChange}
  />
  </InputGroup>


  <Form.Label className="lable">To</Form.Label>
  <InputGroup className="mb-3">
    <FormControl
    type='text'
    name='to_name'
    placeholder='Enter the name you want to send'
    size="60"
    id="input-2"
    className="input"
    value={toSend.to_name}
    onChange={handleChange}
   />
  </InputGroup>

  
  <Form.Label className="lable" >Email</Form.Label>
  <InputGroup className="mb-3">
   <FormControl
   type='text'
   name='reply_to'
   placeholder=' Enter Your email'
   size="60"
   id="input-3"
   className="input"
   value={toSend.reply_to}
   onChange={handleChange}
 />
 </InputGroup>


  <Form.Label className="textarea-lable">Message </Form.Label>
 <InputGroup> 
  <FormControl as="textarea" aria-label="With textarea"
    
   name='message'
   placeholder=" "
   id="input-4"
   maxlength="50" rows="4" cols="50" 
   className="textarea"
   value={toSend.message}
   onChange={handleChange}
  />
  </InputGroup>

  <Button variant="dark" type="submit" className="submit">
    <h4 className="send">Send</h4>
  </Button>
</Form>
</Container>  
</div>


);

};
export default Email;

{/*

  <div className="email-form"> 
      
    <h1 className="contact-text">Contact Us</h1>
    
    <form className="center-form" onSubmit={onSubmit} >
  
  <label for="input-1" className="lable">From</label><br/>
  <input
    type='text'
    name='from_name'
    placeholder='Your Name'
    size="60" 
    id="input-1"
    className="input"
    value={toSend.from_name}
    onChange={handleChange}
  />
  <br/>
  
  <label for="input-2" className="lable">To</label><br/>
  <input
    type='text'
    name='to_name'
    placeholder='Enter the name you want to send'
    size="60"
    id="input-2"
    className="input"
    value={toSend.to_name}
    onChange={handleChange}
  />
  <br/> 
  
  <label for="input-3" className="lable">Email</label><br/>
  <input
    type='text'
    name='reply_to'
    placeholder=' Your email'
    size="60"
    id="input-3"
    className="input"
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <br/>
 
  <label for="input-4" className="textarea-lable"> Message</label><br/>
 
  <textarea
    type='text'
    name='message'
    placeholder=" "
    id="input-4"
    maxlength="50" rows="4" cols="50" 
    className="textarea"
    value={toSend.message}
    onChange={handleChange}
  />
 
  <br/>

  <button type='submit' className="submit"><h4 className="send">Send</h4></button>
  
 </form>
  </div>
);
}*/}