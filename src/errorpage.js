import React from 'react';
import error from './pictures/error.png';
import {useNavigate} from 'react-router-dom';

function ErrorPage() {
    let navigate = useNavigate();
  return(
  <div>
      <h1 className="error">You had searched the wrong page</h1>
     
      
      <img src={error} alt="image about wrong icon"  className="wrong-image"/>

      <div className=" go-to-homepage">  
       Go To Home Page <br/> 
       </div>   

       <button className="error-button" onClick={() => {navigate("/")}}> Home Page</button>
        
             
     
  </div>
  );
};

export default ErrorPage;