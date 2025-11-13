import React,{useState} from "react";
import cat from './cat.png';

function ImageManipulation(){

  const [catHeight,setCatHeight]=useState(200);
  const [catWidth,setCatWidth] = useState(200);
  const [red,setRed]=useState(0);
  const[green,setGreen]=useState(0);
  const[blue,setBlue]=useState(0);
  const [imgRotate,setImageRotate] = useState(0);
  function changeBgColor(){
      setRed(Math.random()*255);
      setGreen(Math.random()*255);
      setBlue(Math.random()*255);
    }
  return(
    <div>
      <h2> Image Manipulation
      </h2>
      <div style={{border:'2px solid red',height:'400px',width:'400px',marginLeft:'200px'}}>
        <img src={cat} alt="cat image" height={catHeight} width={catWidth} style={{paddingLeft:'100px',paddingTop:'100px',alignItems:'center',backgroundColor: `rgb(${red}, ${green}, ${blue})`,transform : `rotate(${imgRotate}deg)` }}/>
        </div>
          <button onClick={()=>{setCatHeight(catHeight+10)}}>Increase Height</button>
          <button onClick={()=>{setCatHeight(catHeight-10)}}>Decrease Height</button>
          <button onClick={()=>{setCatWidth(catWidth+10)}}>Increase Width</button>
          <button onClick={()=>{setCatWidth(catWidth-10)}}>Decrease Width</button>
          <button onClick={changeBgColor}>Change Background</button>
          <button onClick={()=>{setImageRotate(imgRotate+30)}}>Rotate Image</button>
          <br />
          <div>
          <h4>Red:{red}</h4>
          <h4>Blue:{blue}</h4>
          <h4>Green:{green}</h4>
          </div>
        </div>
        
        
  )
}

export default ImageManipulation;