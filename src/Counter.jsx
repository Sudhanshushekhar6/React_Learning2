// export default function Counter(){
//     let count=0;
//     function incCount(){
//         count+=1;
//         console.log(count);
//     }
//     return(
//         <div>
//             <h3>Count={count}</h3>
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     );
// }

import {useState }from "react";
export default function Counter(){
    // let [stateVariable, setStateVariable]=useState(0);
    let [count,setCount]=useState(0); //Initailization
let inccount=()=>{
setCount(count+1);
console.log({count});
// console.log(count);
}
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={inccount}>Increase Count</button>
        </div>
    );
}