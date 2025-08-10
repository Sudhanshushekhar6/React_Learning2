import {useState, useEffect} from "react";

export default function Joker(){
    let [joke,setjoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";
    const getnewjoke=async ()=>{
let response=await fetch(URL);
let jsonResponse=await response.json();

setjoke({setup: jsonResponse.setup, punchline:jsonResponse.punchline});
    };

    useEffect(()=>{
        async function getfirstjoke(){
        let response=await fetch(URL);
        let jsonResponse=await response.json();
console.log(jsonResponse);
setjoke({setup: jsonResponse.setup, punchline:jsonResponse.punchline});
} getfirstjoke();
    },[]);
    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
<button onClick={getnewjoke}>Get New Joke</button>
        </div>
    )
}