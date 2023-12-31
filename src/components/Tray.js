import React , {useContext , useInsertionEffect, useState} from "react";
import "../main.css"
import {DataContext} from "./Form"
import Bar from "./Bar"
import BubbleSort from "../algorithms/BubbleSort";
import cocktailShakerSort from "../algorithms/cocktailShakerSort";
import selectionSort from "../algorithms/selectionSort";
import insertionSort from "../algorithms/insertionSort";
import gnomeSort from "../algorithms/gnomeSort";
import mergeSort from "../algorithms/mergeSort";
import shellSort from "../algorithms/shellSort";
import quickSort from "../algorithms/quickSort";
function Tray(props)
{

    function sort()
    {
        if (document.getElementById("isSorted").value == "1")
        {
            return
        }
        document.getElementById("isSorted").value = "1"
        document.getElementById("sortingButton").disabled = true;
        document.getElementById("speed").disabled = true;
        document.getElementById("jump").disabled = true;
        document.getElementById("generateButton").disabled = true;
        switch(props.algorithm)
        {
            case "mergeSort" :
            {
                mergeSort(props.data , props.setData , speed , jump)
                break;
            }
            case "bubbleSort" :
            {
                
                BubbleSort(props.data , props.setData ,speed , jump)
                break;
            }
            case "selectionSort" :
            {
                selectionSort(props.data, props.setData , speed, jump)
                break;
            }
            case "insertionSort" :
            {
                insertionSort(props.data , props.setData , speed ,jump)
                break;
            }
            case "quickSort" :
            {
                quickSort(props.data , props.setData , speed, jump)
                break;
            }
            case "shellSort" :
            {
                shellSort(props.data ,props.setData , speed ,jump)
                break;
            }
            case "gnomeSort" :
            {
                gnomeSort(props.data , props.setData , speed ,jump)
                break;
            }
            case "cocktailShakerSort" :
            {
                cocktailShakerSort(props.data , props.setData , speed ,jump)
                break;
            }
            


        }

    }
    function handleSpeedChange(e)
    {
        setSpeed(e.target.value)
    }
    function handleJumpChange(e)
    {
        setJump(e.target.value)
    }
    const data = useContext(DataContext)
    const [speed , setSpeed]  =useState(30)
    const [jump , setJump] = useState(1)
    return (<React.Fragment>
        <div className = "tray" id = "tray">
            <div className="screen" id = "screen">
            {
                data.map(function (item , i ) {
                    return <Bar length = {data.length} id={i} key = {i} value = {item} i = {i}/>
                })
            }
            </div>
            
        </div>
            <div className="holder"  style={{
            display : "flex",
            justifyContent : "space-evenly",
            alignItems : "center",
            width : "50%",
            marginLeft : "25%"
        }}>
            <button onClick = {sort} id = "sortingButton" className="edit">Sort</button>
           <span>
            Speed
           <input type="range" min="1" max="500" value={speed} style = {{
            direction : "rtl" ,
            
            

        }
            } className="slider sliderContainer edit" id="speed" onChange={handleSpeedChange}/>
   
           </span>
           <span>
           Jump (Speeds up a lot)
        <input type="range" min="0" max="50" value={jump} className="slider sliderContainer edit" id="jump" onChange={handleJumpChange}/>
        
           </span>
      
        </div>    
    
        
       
    </React.Fragment>)
}

export default Tray