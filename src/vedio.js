import React from 'react';

import ReactPlayer from 'react-player';

const MyVedio = () => {
  return <div className="vedio">
      < ReactPlayer
      url="https://www.youtube.com/watch?v=1ze01nJkYIY"
      height="250px"
      width="350px"
      controls/>


  </div>;
};

export default MyVedio;
