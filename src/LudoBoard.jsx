import { useState } from 'react';
export default function LudoBoard(){
let [moves,setmoves]=useState({blue:0, red:0, yellow:0, green:0});
let updateblue=()=>{
    // moves.blue+=1;
    // moves.red+=1;
    // moves.yellow+=1;
    // moves.green+=1;
    // setmoves({...moves});
setmoves((prevmoves) => {
  return {
    ...prevmoves,
    blue: prevmoves.blue + 1
  };
});


};
    return(
        <div>
            <p> Game Begins!</p>
            <div className="board">
                <p>Blue Moves ={moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateblue}>+1</button>
                <p >yellow Moves ={moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateblue}>+1</button>
                 <p>Green Moves ={moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateblue}>+1</button>
                 <p>Red Moves ={moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateblue}>+1</button>
            </div>
        </div>
    );
}