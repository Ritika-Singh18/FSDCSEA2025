import React,{useState} from "react";
import cat from './cat.png';

function ImageManipulation(){

  const [catHeight,setCatHeight]=useState(200);
  const [catWidth,setCatWidth] = useState(200);

  return(
    <div>
      <h2> Image Manipulation
      </h2>
      <div style={{border:'2px solid red',height:'400px',width:'400px',marginLeft:'200px'}}>
        <img src={cat} alt="cat image" height={catHeight} width={catWidth} style={{paddingLeft:'100px',paddingTop:'100px',alignItems:'center'}}/>
        </div>
          <button onClick={()=>{setCatHeight(catHeight+10)}}>Increase Height</button>
          <button onClick={()=>{setCatHeight(catHeight-10)}}>Decrease Height</button>
          <button onClick={()=>{setCatWidth(catWidth+10)}}>Increase Width</button>
          <button onClick={()=>{setCatWidth(catWidth-10)}}>Decrease Width</button>
        </div>
        
  )
}

export default ImageManipulation;