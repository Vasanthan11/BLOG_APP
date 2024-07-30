import {useState, useEffect } from 'react'

function useWindowsSize() {



const [windowSize,setWindowSize] =useState({
    with:undefined,
    height:undefined,
}); 
 
useEffect(()=>{
    const handleResize=()=>{
    setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight,
    })
    }
    handleResize();
    window.addEventListener("resize",handleResize);
    
    // For cleanup the memory 
    return ()=>window.removeEventListener("resize",handleResize);

},[])
  return windowSize;
}

export default useWindowsSize;