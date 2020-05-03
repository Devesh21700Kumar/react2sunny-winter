import './seasonDisplay.css';
import React from 'react';


const seasonConfig ={
  summer:{
    text:"Lets hit the beach!",
    icoName:'sun'
  },
  winter:{
    text:"Damn its cold",
    icoName:'snowflake'

  }
}

const getSeason =(lat,month) =>{
if(month>2 && month<9)
{
 return lat > 0?'summer':'winter';
}else{
  return lat>0?'winter':'summer';
}
};

const SeasonDisplay=props=>{
  //console.log(props.lat);
  const season =getSeason(props.lat,new Date().getMonth());
  const{ text, iconName}=seasonConfig[season];

  //WE CAN USE if () else also
 /* console.log(season);
 const text=season === 'winter'?'its is chilly':'lets hit the beach'
 const icon =season==='winter'?'snowflake':'sun';*/
 
 
 
 return(
   //ES 2015 syntax used-- $and ''in icon
    <div className={`season-display ${season} `}>
    
      <i className={` icon-left massive ${iconName} icon`} />
      <h2>{text}</h2>
      <i className={` icon-right massive ${iconName} icon`} />
      </div>
  );
};

export default SeasonDisplay;
