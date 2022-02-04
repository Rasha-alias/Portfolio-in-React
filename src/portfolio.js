import React from 'react';
import {data} from "./data";


const Portfolio = () => {

  return(

<div className='port-container'>    

    {data.map(item => (   

    <div>

    <a href={item.link} rel="noreferrer" className="item">

   <img src={item.image}  className="port-img"/>
   <h3 className="item-text">{item.title}</h3>
  
   </a>
   
   
   
   </div>
    
      ))} 
</div>
      
  );
};

export default Portfolio;
