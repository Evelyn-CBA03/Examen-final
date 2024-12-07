import React from 'react'; 
import './card.css'; 
import im1  from "@/public/im1.svg"; 
import im2  from "@/public/im2.svg"; 
import im3  from "@/public/im3.svg"; 
import im4  from "@/public/im3.svg"; 

interface IconProps { 
  type: 'avatar1' | 'avatar2' | 'avatar3'|'avatar4'; 
}
const Icon: React.FC<IconProps> = ({type}) => { 
  let iconSrc; 
  switch (type) { 
    case 'avatar2': 
      iconSrc = im2.src; 
      break; 
    case 'avatar3': 
      iconSrc = im3.src; 
      break; 
    case 'avatar1': 
      default: iconSrc = im1.src; 
      break; 
      case 'avatar4': 
      iconSrc = im4.src; 
      break; 
  } 
  return ( 
    <div className="icon-container"> 
      <img src={iconSrc} alt={type} className="icon" /> 
    </div> 
  ); 
}; 
export default Icon;
