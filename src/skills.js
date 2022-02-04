import React from 'react';
import skillsimg from './pictures/skillsimg.png';


const Skills = () => {
  return( 
    
<div className="i">    
<div className="left">
  <div className="left-wrapper">
    <h2 className="intro">👋  Hello! My name is</h2>
    <h1 className="name">  Rasha Alias  </h1>
    <h2 className="intro-skills"> Programing skills and tools </h2>
        
      
    <div className="left-title">
      <div className="title-wrapper">
        <div className="title-item">HTML5 </div>
        <div className="title-item"> CSS</div>
        <div className="title-item"> SASS</div>
        <div className="title-item"> JAVASCRIPT </div>
        <div className="title-item">React </div>
        <div className="title-item">Bootstrap </div>
        <div className="title-item">Git</div>
        <div className="title-item">Figma</div>
        <div className="title-item">Trello</div>
      </div>
      </div>
      <div className="description">  Currently, I am studying Front-end Development at KYH in Stockholm<br/>

                                      And I am learning new things everyday
    </div>
    
    <h2 className="intro"><u><i>Interest</i></u></h2>
    <div className="interest">
    Coding, Music, photography, cooking.....
    </div>
   


  </div>
</div>

        
        

       
        <div className="right">
        <div className="bg"> </div>
        <img src={skillsimg} alt ="image about skills" className="skills-image"/>

          
        </div>
</div>       
   
  );      
  
};

export default Skills;
