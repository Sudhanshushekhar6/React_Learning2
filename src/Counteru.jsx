// import {useState, useEffect} from "react";
// export default function Counteru(){
//     let [count,setcount]=useState(0);
//     let inccount=() =>{
// setcount(currcount=>currcount+1);
//     };
//     useEffect(function print(){
//         console.log("hi, sudhanshu");
//       })
//     return(
//         <div>
// <h3>count={count}</h3>
// <button onClick={inccount}>+1</button>
//         </div>
//     )
        
// }


import {useState, useEffect} from "react";
export default function Counteru(){
    let [countX,setcountX]=useState(0);
    let [countY,setcountY]=useState(0);
    let inccountX=() =>{
setcountX(currcountX=>currcountX+1);
    };
        let inccountY=() =>{
setcountY(currcountY=>currcountY+1);
    };
    useEffect(function print(){
        console.log("hi, sudhanshu");
      },[countX])
    return(
        <div>
<h3>count={countX}</h3>
<button onClick={inccountX}>+1</button>
<h3>count={countY}</h3>
<button onClick={inccountY}>+1</button>
        </div>
    )
        
}