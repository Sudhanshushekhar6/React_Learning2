import {useState} from "react";
import "./Lottery.css";
import {genTicket,sum} from "./helper";
// export default function  Lottery(){
//     let [ticket,setTicket]=useState(genTicket(3));
//    let iswining=sum(ticket)===15;
// let buyticket=() =>{
// setTicket(genTicket(3));
// };

//     return (
//         <div>
//         <h1>Lottery Game!</h1>
//         <div class="ticket">
// <span>{ticket[0]}</span>
// <span>{ticket[1]}</span>
// <span>{ticket[2]}</span>
//         </div>
//         <button onClick={buyticket}>Buy new Ticket</button>
//         <h3>{iswining && "Congratulations, you won"}</h3>
//         </div>
//     )
// }

// Lottery Component
import Ticket from "./Ticket";
export default function  Lottery({n, wincondition}){
    let [ticket,setTicket]=useState(genTicket(n));
//    let iswining=sum(ticket)===15;
let iswinning=wincondition(ticket);
let buyticket=() =>{
setTicket(genTicket(n));
};

    return (
        <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket} />
        <button onClick={buyticket}>Buy new Ticket</button>
        <h3>{iswining && "Congratulations, you won"}</h3>
        </div>
    )
}