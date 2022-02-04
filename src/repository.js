import React, {useState,useEffect} from "react";
import axios from "axios";
import Result from "./result";

import Container from 'react-bootstrap/Container';


const Repo = () => {
      const [searchInput, setSearchInput] = useState('rasha_alias');
      const[repos, setRepos] = useState([]);

      const handleChange = (e) =>{
          setSearchInput(e.target.value);   
      }
      

      const handleClick = async() =>{

        try{
          const  result= await axios(' https://api.github.com/users/rasha-alias/repos')
          setRepos(result);
        }
        
        catch(err){
          console.log(err);
        } 
      };

      console.log(repos);
      useEffect(() => {
          handleClick(); 
      }, [] );

    return (
      <Container>
      
        <div className="reposOutput">
            <h1> These are Rasha's Repositories</h1>
        
        <div className="rasha-repos">
         <br/><input className="inputfield" type="text" placeholder="Search" value={searchInput} onChange={handleChange}/>
         {/*<button onClick={handleClick}>Search</button>*/}
        </div>
        
        <Result repos={repos}/>
        </div>
        </Container>
 
     );
}
 
export default Repo;