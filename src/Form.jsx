import {useState} from "react";
// export default function Form(){
//     let [fullname,setfullname]=useState("");
//      let [username,setusername]=useState("hh");
// let handlenamechange=(event)=>{
// setfullname(event.target.value); // Fetch the current value of Input
// };
// let handleusername=(event)=>{
// setusername(event.target.value);
// };
//     return (
//        <form>
//         <label htmlFor="fullname">Full Name</label>
//         <input placeholder="Enter your Name" type="text" value={fullname} onChange={handlenamechange} id="fullname"/>
//         <br></br>
//          <label htmlFor="username">User Name</label>
//         <input placeholder="Enter Username" type="text" value={username} onChange={handleusername} id="username"/>
//         <button>Submit</button>
//        </form>
//     )
// }

// Handling Multiple Input

export default function Form(){
    let [formdata,setformdata]=useState({
fullname:"",
username:"",
    });
let handleinputchange=(event) =>{
let fieldname=event.target.name;
let newvalue=event.target.value;
setformdata((currdata)=>{
    currdata[fieldname]=newvalue;
    return { ...currdata };

});
};
let handlesubmit=(event)=>{
event.preventDefault();
setformdata({
fullname:"",
username:"",
    });
};
    return (
       <form onSubmit={handlesubmit}>
        <label htmlFor="fullname">Full Name</label> 
        <input placeholder="Enter your Name" type="text" value={formdata.fullname} id="fullname" name="fullname" onChange={handleinputchange} />
        <br></br>
         <label htmlFor="username">User Name</label>
        <input placeholder="Enter Username" type="text" value={formdata.username}  id="username" name="username" onChange={handleinputchange} />
        <button>Submit</button>
       </form>
    )
}

