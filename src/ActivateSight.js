import { useState } from "react";

function ActivateSight() {
  const [title, setTitle] = useState("");
  const clickHandler = () => {
    console.log(title);
    setTitle("UPDATED");
  };  
  const btnStyle={
    height:'80px',
  }
  return (<button style={btnStyle} onClick={clickHandler}>React-sight activate!</button>)
}
export default ActivateSight;